'use client'

export const Filters = () => {
  return (
    <div className="max-w-[15rem] w-full flex flex-col gap-4">
      <div className="flex justify-between items-center h-5">
        <div className="flex h-full gap-1">
          <span className="w-[20px] bg-base-300 rounded-md animate-pulse" />
          <span className="w-[54px] bg-base-300 rounded-md animate-pulse" />
        </div>

        <span className="w-[100px] h-full bg-base-300 rounded-md animate-pulse" />
      </div>

      <hr />

      {/* Category collapsible */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-1 gap-12 justify-between items-center">
          <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
          <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
        </div>
        <div className="flex flex-col gap-2 px-1 py-2">
          <div className="flex gap-1">
            <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
            <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
          </div>

          <div className="flex gap-1">
            <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
            <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
          </div>

          <div className="flex gap-1">
            <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
            <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
          </div>

          <div className="flex gap-1">
            <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
            <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
          </div>

          <div className="flex gap-1">
            <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
            <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      <hr />

      {/* Price collapsible */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-1 gap-12 justify-between items-center">
          <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
          <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
        </div>
        <div className="flex flex-col gap-6 px-1 py-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
              <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
            </div>

            <div className="flex gap-1">
              <span className="flex-1 bg-base-300 h-5 rounded-md animate-pulse" />
              <span className="w-[20px] bg-base-300 h-5 rounded-md animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex w-full h-[36px] justify-between gap-2">
              <span className="flex-1 bg-base-300 h-full rounded-md animate-pulse" />

              <div className="w-[3px] h-3/4 my-auto bg-base-300/50 rounded-full" />

              <span className="flex-1 bg-base-300 h-full rounded-md animate-pulse" />
            </div>

            <span className="w-full bg-base-300 h-[36px] rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
