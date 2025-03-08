import { useEffect, useState } from 'react'
import { useAmountQuery } from '../../queries/finance/balance/balanceQuery';
import socketManager from "../../services/socket/socket";
import { useQueryClient } from '@tanstack/react-query';

export const useBalanceData = () => {
    const [amountDetails, setAmountDetails] = useState({
        total: "",
        approved: "",
        pending: "",
        rejected: "",
    });

    const queryClient = useQueryClient();
    const { data } = useAmountQuery();
    // Effect to calculate amount details based on status
    useEffect(() => {
        if (!data?.data) return;

        const totals = data.data.reduce(
            (acc, item) => {
                // Assuming each item has an 'amount' field; adjust if the field name differs
                const amount = Number(item.amount) || 0; // Convert to number, default to 0 if undefined

                acc.total += amount;
                if (item.status === "approved") acc.approved += amount;
                if (item.status === "pending") acc.pending += amount;
                if (item.status === "rejected") acc.rejected += amount;

                return acc;
            },
            { total: 0, approved: 0, pending: 0, rejected: 0 }
        );

        setAmountDetails(totals);
    }, [data]); // Runs whenever data changes


    useEffect(() => {
        const handlePaymentAdded = (updatedPayment) => {
            queryClient.setQueryData(["total/amounts"], (oldData) => {
                if (!oldData) return { data: [updatedPayment] };
                const existingPaymentIndex = oldData.data.findIndex(
                    (master) => master.id === updatedPayment.id
                );
                if (existingPaymentIndex !== -1) {
                    return {
                        ...oldData,
                        data: oldData.data.map((payment, index) =>
                            index === existingPaymentIndex
                                ? { ...payment, ...updatedPayment }
                                : payment
                        ),
                    };
                }
                return { ...oldData, data: [...oldData.data, updatedPayment] };
            });
        };

        socketManager.connect();
        socketManager.io.on("notify:admin:amount:changed", handlePaymentAdded)
        socketManager.io.on("notify:admin:amount:updated", handlePaymentAdded)

        return () => {
            socketManager.io.off("notify:admin:amount:changed", handlePaymentAdded);
            socketManager.io.off("notify:admin:amount:updated", handlePaymentAdded);
        };
    }, [queryClient]);


    return {
        amountDetails,
    }
}
