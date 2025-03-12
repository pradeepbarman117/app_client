import { NavLink, Outlet, useParams } from "react-router-dom";

const MasterDetails = () => {
  const { id } = useParams();
  const navItems = [
    {
      label: "Overview",
      link: "overview",
    },
    {
      label: "Users",
      link: "users",
    },
    {
      label: "Transactions",
      link: "transaction",
    },
  ];
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1">
            <div className="pb-3">
              <div className="flex border-b border-[#dce0e5] px-4 gap-8">
                {navItems.map((item, index) => (
                  <NavLink
                    to={`/masters/${id}/${item.link}`}
                    key={index}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center border-b-[3px] ${
                        isActive ? "border-b-[#007bff] text-[#007bff]" : "border-b-transparent text-[#637588]"
                      } pb-[13px] pt-4`
                    }
                  >
                    <p className="text-sm font-medium leading-normal tracking-[0.015em]">
                      {item.label}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDetails;
