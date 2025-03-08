import { useEffect, useState } from 'react';
import socketManager from "../../services/socket/socket";
import { useQueryClient } from '@tanstack/react-query';
import { useTotalUserQuery } from '../../queries/user/getTotalUser';

export const useTotalUserData = () => {
    const [userDetails, setUserDetails] = useState({
        total: 0,
        active: 0,
        blocked: 0,
    });

    const queryClient = useQueryClient();
    const { data } = useTotalUserQuery();
    console.log(data, 'userList');

    // Effect to calculate user counts based on status
    useEffect(() => {
        if (!data?.data) return;

        const counts = data.data.reduce(
            (acc, item) => {
                acc.total += 1;
                if (item.status === true) acc.active += 1;
                if (item.status === false) acc.blocked += 1;
                return acc;
            },
            { total: 0, active: 0, blocked: 0 }
        );

        setUserDetails(counts);
    }, [data]); // Runs whenever data changes

    // Socket handling effect
    // useEffect(() => {
    //     const handleUserUpdated = (updatedUser) => {
    //         queryClient.setQueryData(["user/total"], (oldData) => {
    //             if (!oldData) return { data: [updatedUser] };
    //             const existingUserIndex = oldData.data.findIndex(
    //                 (user) => user.id === updatedUser.id
    //             );
    //             if (existingUserIndex !== -1) {
    //                 return {
    //                     ...oldData,
    //                     data: oldData.data.map((user, index) =>
    //                         index === existingUserIndex
    //                             ? { ...user, ...updatedUser }
    //                             : user
    //                     ),
    //                 };
    //             }
    //             return { ...oldData, data: [...oldData.data, updatedUser] };
    //         });
    //     };

    //     socketManager.connect();
    //     socketManager.io.on("notify:admin:amount:changed", handleUserUpdated);
    //     socketManager.io.on("notify:admin:amount:updated", handleUserUpdated);

    //     return () => {
    //         socketManager.io.off("notify:admin:amount:changed", handleUserUpdated);
    //         socketManager.io.off("notify:admin:amount:updated", handleUserUpdated);
    //     };
    // }, [queryClient]);

    return {
        userDetails,
    };
};