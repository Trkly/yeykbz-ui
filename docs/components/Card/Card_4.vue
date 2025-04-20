<template>
  <div class="flex gap-4">
    <YCard shadow="always" class="w-1/3">
      <template #header>常驻阴影</template>
      <p>此卡片始终显示阴影效果</p>
    </YCard>

    <YCard shadow="hover" class="w-1/3">
      <template #header>悬停阴影</template>
      <p>鼠标悬停时显示阴影</p>
    </YCard>

    <YCard shadow="never" class="w-1/3">
      <template #header>无阴影模式</template>
      <p>始终不显示阴影</p>
    </YCard>
  </div>
</template>
