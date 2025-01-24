
const MasterDetailsSkeleton = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                {/* Skeleton for the Name */}
                <div className="w-32 h-8 bg-gray-300 animate-pulse rounded"></div>
                {/* Skeleton for the Email */}
                <div className="w-40 h-5 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dce0e5] px-4 gap-8">
                {/* Skeleton for navigation links */}
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-medium leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {/* Skeleton for "Edit Master" title */}
              <div className="w-40 h-6 bg-gray-300 animate-pulse rounded"></div>
            </h3>
            <form action="#!">
              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                {/* Skeleton for Name input */}
                <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl"></div>
                {/* Skeleton for Email input */}
                <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl"></div>
              </div>

              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                {/* Skeleton for Password input */}
                <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl"></div>
                {/* Skeleton for Passcode input */}
                <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl"></div>
              </div>

              <div className="flex max-w-full flex-wrap gap-4 px-4 py-3">
                {/* Skeleton for Share input */}
                <div className="w-full h-14 bg-gray-300 animate-pulse rounded-xl"></div>
              </div>

              <div className="flex w-fit flex-wrap gap-4 px-4 py-3">
                {/* Skeleton for Blacklist toggle */}
                <div className="w-16 h-6 bg-gray-300 animate-pulse rounded-full"></div>
              </div>

              <div className="flex px-4 py-3 justify-end">
                {/* Skeleton for Save Button */}
                <div className="w-24 h-10 bg-blue-300 animate-pulse rounded-xl"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDetailsSkeleton;
