import { useMasterByIdQuery } from "../../../queries/masters/getMasterById";
import { NavLink, useLocation, useParams } from "react-router-dom";
import MasterDetailsSkeleton from "./MasterDetailsSkeleton";
import { useFormik } from "formik";
import { masterServices } from "../../../services/master/masterServices";
import Cookies from "js-cookie";
import socketManager from "../../../services/socket/socket";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { masterUpdateSchema } from "../../../utils/validation/forms/masterValidator";
import User from "../../user/User";
import MasterDetailsForm from "./forms/MasterDetailsForm";
import toast from "react-hot-toast";

const MasterDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const location = useLocation();
  const { id } = useParams();

  const { data, isLoading } = useMasterByIdQuery(id);
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: data
      ? {
          name: data.data.name,
          email: data.data.email,
          password: data.data.password,
          passcode: data.data.passcode,
          percent: data.data.percent,
          blacklist: data.data.blacklist,
        }
      : {
          name: "",
          email: "",
          password: "",
          passcode: "",
          percent: "",
          blacklist: false,
        },
    enableReinitialize: true,
    validationSchema: masterUpdateSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // Create an object to store the changed fields
      const credential = Object.keys(values).reduce((acc, key) => {
        if (values[key] !== formik.initialValues[key]) {
          acc[key] = values[key]; // Add the changed field and its new value to the object
        }
        return acc;
      }, {});

      try {
        const token = Cookies.get("token");
        const response = await masterServices.update(id, credential, token);
        if (response.status === 200) {
          toast.success(response.data.message);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    socketManager.connect();

    const handleMasterUpdate = (updatedMaster) => {
      console.log(updatedMaster, "updatedMaster");
      // queryClient.invalidateQueries(["masterById", id]);
      queryClient.setQueryData(["masterById",id], (oldData) => {
        if (!oldData) return { data: updatedMaster };
        return {
          ...oldData,
          data: updatedMaster,
        };
      });
    };

    if (socketManager.io) {
      socketManager.io.on("masterUpdated", handleMasterUpdate);
    }

    return () => {
      if (socketManager.io) {
        socketManager.io.off("masterUpdated", handleMasterUpdate);
      }
    };
  }, [queryClient,id]);

  // Initialize formik only after data is loaded

  // Determine the active tab based on the URL
  useEffect(() => {
    const path = location.pathname.split("/").pop(); // Extract the last part of the URL
    setActiveTab(path || "overview"); // Set the active tab based on the URL path
  }, [location.pathname]);

  const isChanged = Object.keys(formik.values).some(
    (key) => formik.values[key] !== formik.initialValues[key]
  );

  const navItems = [
    {
      label: "Overview",
      active: location.pathname === `/masters/${id}/overview`,
      link: "overview",
    },
    {
      label: "Users",
      active: location.pathname === `/masters/${id}/users`,
      link: "users",
    },
    { label: "Properties", link: "#!" },
    { label: "Audience", link: "#!" },
    { label: "Revenue", link: "#!" },
    { label: "Attribution", link: "#!" },
  ];

  if (isLoading || !data) {
    return <MasterDetailsSkeleton />;
  }

  console.log("Master Details");

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight capitalize">
                  {formik.values.name}
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  {formik.values.email}
                </p>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dce0e5] px-4 gap-8">
                {navItems.map((item, index) => (
                  <NavLink
                    to={`/masters/${id}/${item.link}`}
                    key={index}
                    className={`flex flex-col items-center justify-center border-b-[3px] ${
                      item.active
                        ? "border-b-[#111418] text-[#111418]"
                        : "border-b-transparent text-[#637588]"
                    } pb-[13px] pt-4`}
                    href="#"
                  >
                    <p className="text-[#637588] text-sm font-medium leading-normal tracking-[0.015em]">
                      {item.label}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
            {/* <h3 className="text-[#111418] text-lg font-medium leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Edit Master
            </h3> */}
            {/* Content will be here based on tabs */}

            {activeTab === "overview" && (
              <MasterDetailsForm formik={formik} isChanged={isChanged} />
            )}
            {activeTab === "users" && <User />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDetails;
