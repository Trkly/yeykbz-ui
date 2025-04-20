<template>
  <YCard>
    <template #image>
      <div class="bg-green-100 p-4 border-b">
        <div class="text-xl font-bold">项目进度</div>
      </div>
    </template>
    <div class="space-y-4">
      <div
        style="
          display: flex;
          justify-content: space-between;
          padding-left: 30px;
        "
      >
        <div class="font-bold" style="flex: 1">完成率</div>
        <div class="text-green-500" style="flex: 1">75%</div>
      </div>
      <div class="h-2 bg-gray-200 rounded-full">
        <div class="h-2 bg-green-500 rounded-full w-3/4"></div>
      </div>
      <div class="flex gap-2 mt-4">
        <YButton color="green"> 查看详情 </YButton>
        <YButton color="gray"> 暂停项目 </YButton>
      </div>
    </div>
    <template #footer>
      <div class="text-sm text-gray-500">下次同步时间：2小时后</div>
    </template>
  </YCard>
</template>
