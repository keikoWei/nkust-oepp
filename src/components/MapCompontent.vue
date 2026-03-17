<template>
  <div class="map-container" style="width: 60%; margin: auto">
    <!-- 按鈕容器 -->
    <div class="button-container">
      <button @click="switchView('campus')">校區分布圖</button>
      <button @click="switchView('hallway')">S廊道圖</button>
    </div>
    <!-- 地圖區域 -->
    <!-- 引入 SVG 文件 -->
    <!-- SVG 內容從 Illustrator 匯出後直接貼到這裡 -->
    <!-- 地圖區域 -->
    <div class="content-container">
      <div class="svg-wrapper" v-if="currentView === 'campus'">
        <svg
          id="圖層_1"
          data-name="圖層 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69.97 121.89"
          width="200"
          height="350"
        >
          <path
            id="area1"
            class="cls-1"
            @mouseenter="handleMouseEnter('湖內區', 'area1')"
            @mouseleave="handleMouseLeave('area1')"
            @click="
              handleAreaClick('湖內校區(114/08/01接管)', 'area1', 'hu1.jpg')
            "
            d="M163.45,594.22l.46,1.47h0a3.71,3.71,0,0,1,1.44,2.94h0a6.31,6.31,0,0,0,.43,2.27l.57,1.46.75-1.25a.32.32,0,0,1,.52,0,2.58,2.58,0,0,0,.62.51c.56.39-.72,1.51-.72,1.51l.37,0a2.83,2.83,0,0,1,2.26,1.75h0a1.49,1.49,0,0,0,1.24.91l1.78.17a5.62,5.62,0,0,0,1.69-.11l1.74-.38a3.75,3.75,0,0,0,2.33-1.63l.79-1.21a4,4,0,0,0,.52-1.24h0a.93.93,0,0,0-.89-1.13h0a3,3,0,0,1-2.6-1.53h0a2,2,0,0,0-1.75-1h0a1.83,1.83,0,0,1-1.82-1.72l0-1a.6.6,0,0,0-1-.42l-.75.65a2,2,0,0,1-1.74.41l-1.54-.38a5.35,5.35,0,0,1-1.15-.44l-2.58-1.36A.62.62,0,0,0,163.45,594.22Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M185.22,599.43V596.8l6.42,1.78,2.46.74c.77.23,1-.78,2.07-.71h0L197,600a2.48,2.48,0,0,0,2.08,1.14h1.61a1.77,1.77,0,0,1,1.63,1.08l.3.7h0a1.8,1.8,0,0,1,.9,2.37l-1.66,3.68-.67,4.13a5.7,5.7,0,0,0,.13,2.43l.53,1.94a.9.9,0,0,1-1,1.14c-1-.11-1.91-.31-.83-.58s.86-1.23.47-1.87a1.12,1.12,0,0,0-1.18-.51l-1.4.27a2,2,0,0,1-1.68-.42h0a1,1,0,0,0-1.5.24h0a2.11,2.11,0,0,1-2.47.89l-.14-.05a3.75,3.75,0,0,1-1-.52l-1.31-1-1.13-.37,1.33-2.46,1.47-2.66V606l-.48-2.56-2-1-2-1.85-1.79-1.11"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M178.74,620.13h0l.29.91a3.91,3.91,0,0,1,0,2.32h0l.76.35a.76.76,0,0,1,.43.67v.86a2.16,2.16,0,0,1-1.13,1.9h0a11,11,0,0,0-.39,1.39,15.12,15.12,0,0,0,.78,1.88,4,4,0,0,0,.36.64h0a1.84,1.84,0,0,1,0,2.06l-.2.3h2.46a1.85,1.85,0,0,1,1.37.62l1,1.16v-1.38l1.16,0,1.35-1.06,1.15-.12,2-1.45,2,.68,1.37,1a.58.58,0,0,0,.91-.43l.15-1.87v-2.14l-.41-1.89,2.3-2.59,3.68-1.65,1.92-.48.44-1.33-.68-1.59-1.78-.42.74-1.72-1.45-1.11-2.6.13-1.76-.27h0a3.81,3.81,0,0,1-3.62.43l-.74-.3-1.9-.94L188,617a4.85,4.85,0,0,1-1.48,2.29h0a2.26,2.26,0,0,1-2.2.45l-3.22-1.05-.3,0A2.65,2.65,0,0,0,178.74,620.13Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M163.42,593.42s-4,1.74-3.7,1.88,1.06,4.14,1.32,5.5a4.41,4.41,0,0,0,.28.87l2,4.45a4.73,4.73,0,0,1,.24,3.23l-.13.45.19,1a1.26,1.26,0,0,0,2.09.7l.48-.44a.93.93,0,0,1,.9-.2l.95.3a1.47,1.47,0,0,0,1.9-1.41h0l.57-.51-.25-2.78-.1-1.56-1.09-.84a2.36,2.36,0,0,1-.84-2.37l0-.1-1.14-.47-.57.95-1.15-2.82-.51-2.44Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M164.19,611.64l.29,1.5,1,1.18.8,2.69.71,1.66a.79.79,0,0,1-.42,1l-2.37,1a.88.88,0,0,0-.48,1.14l.3.76a1.56,1.56,0,0,0,1.71,1l1.95-.33a1.45,1.45,0,0,1,1.33.48h0a1.85,1.85,0,0,0,1.26.63l2.66.19a2.43,2.43,0,0,1,1.21.43l.88.62a1.84,1.84,0,0,0,2.05,0h0l1.26.7a1,1,0,0,0,1.47-.58l.18-.54a1.31,1.31,0,0,0-.39-1.38l-.54-.46,0-2.32-.29-.91.34-.37a1.28,1.28,0,0,0,.22-1.43l-.24-.52a1.18,1.18,0,0,0-1.08-.69h-.06a2.7,2.7,0,0,1-2.23-1.17l-.84-1.22a1.71,1.71,0,0,0-1-.69l-1.68-.41-2.42-2.18-2.66-.6Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M169.69,625.33l4.07,9.86L179,645.51a.83.83,0,0,0,1.48,0l1.36-2.64,2.24-5.4a2.4,2.4,0,0,0-.15-2.12l-.73-1.25a1.2,1.2,0,0,0-1-.59l-1.41-.06a1,1,0,0,1-1-1.12l.07-.86a3,3,0,0,0,0-.85l-.53-2.75a1.92,1.92,0,0,0-.75-1.19l-.84-.63a4,4,0,0,0-1.29-.63l-3.44-.9-2.21-.46A.93.93,0,0,0,169.69,625.33Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M181.18,650.82l-.57,1.83a2.73,2.73,0,0,0-.07,1.33l.25,1.21.22,2.21a3.16,3.16,0,0,1-1.15,2.75l-.38.31a2.88,2.88,0,0,0-1,1.89l-.26,2.37a3.59,3.59,0,0,0,.29,1.86l1.16,2.56.74,1.15a2.37,2.37,0,0,1,.06,2.51h0a.85.85,0,0,0,.48,1.25l3.57,1.15,2.26-.34,1.56.87a1.92,1.92,0,0,0,1.87,0l2.92-1.67a1.78,1.78,0,0,1,1.65-.06l.63.3a1.87,1.87,0,0,0,2.14-.36l.34-.34.87.18a.89.89,0,0,0,.81-.24l.24-.24a1.09,1.09,0,0,0,.3-.75v-.78l1-.28-1-.83.76-1.78-4.78-.67s-1.15.82-1.33.89-3.65-.52-3.65-.52l-3.32.63a1,1,0,0,1-1.18-.7l-.29-.86a2.13,2.13,0,0,1,.18-1.71h0a2.54,2.54,0,0,1,1.64-1.18l3.08-.68L193,663l1.07-2.73,1.43-2a3,3,0,0,0,.52-1.35l0-.22a2.37,2.37,0,0,0-.42-1.65l-1.3-1.86-.11-.15a1.79,1.79,0,0,0-2-.6l-.34.12-2.14-2,.34-.92-.4-.61-1.38,1.08-3.07.11-2.74-.16-1.3.79"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M195.07,654.37l.89,1.4.61,1.37a2.94,2.94,0,0,0,1.75,1.58l.87.29a2.7,2.7,0,0,0,.85.13h2.54a1.5,1.5,0,0,1,.52.1l.58.21a2.17,2.17,0,0,0,2.39-.58l3.45-3.79,3-2.42,0,0a1.67,1.67,0,0,0,.58-2.23h0a20.71,20.71,0,0,0,1.44-2.55,12.62,12.62,0,0,1,.45-1.52,3.33,3.33,0,0,0,0-2l-.18-.63a2.13,2.13,0,0,1,.77-2.29l.61-.46a2.78,2.78,0,0,0,1.08-1.74l.36-2a2.37,2.37,0,0,0-.87-2.29l-.1-.07a1.28,1.28,0,0,0-1.48-.07h0a2.75,2.75,0,0,1-2.25.34h0a1.61,1.61,0,0,0-1.42.28l-2.19,1.75a3,3,0,0,1-1.75.65l-3.23.11a3.91,3.91,0,0,1-.49,0l-1.52-.22a2.45,2.45,0,0,0-2,.53l-.27.29c-.3.34-.23,2.57-.18,3l.12,1-.77,2.28-1.43,1.11A2.41,2.41,0,0,0,197,648l.1,1.4-2,2.52h0A2.34,2.34,0,0,0,195.07,654.37Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M221.39,631.23l.9.64a3.08,3.08,0,0,0,1.78.56h2.13a1.93,1.93,0,0,1,1.93,1.93v11.85l-.58,5.43a4.86,4.86,0,0,1-1.18,2.7l-1.31,1.51a4,4,0,0,0-.91,1.86l-.57,3a5.93,5.93,0,0,0-.12,1.19v.91a2.65,2.65,0,0,1-2,2.57l-1.94.51-.74.4a3.83,3.83,0,0,1-2.28.41h0a1.7,1.7,0,0,1-1.47-1.87l.36-3.17a4.08,4.08,0,0,0-.39-2.23l-1.48-3h0a3.78,3.78,0,0,1-.69-3.47l.29-1,1.88-5.66,0-2.66a4.23,4.23,0,0,1,1.12-2.79l.94-1,.43-2.87a3.07,3.07,0,0,1,1.23-2h0a1.64,1.64,0,0,0,.64-1l.1-.5a3,3,0,0,1,1.8-2.21l.08,0"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M210.24,667.62a1,1,0,0,0-.32,1.51,11.22,11.22,0,0,1,1.62,2.56c-.23.15-2.3.74-2.3.74v3l-1.85,2.88v1.42a3.76,3.76,0,0,0,1.55,3l.91.65a3.5,3.5,0,0,1,1.11,1.33l1.24,2.6,1.33,2.45a3.65,3.65,0,0,1,0,3.54h0a1.28,1.28,0,0,0,.83,1.87l1.63.36,2.13.15a4.69,4.69,0,0,0,4.65-2.88h0l1.81-3.27,1.34-5v-4.16a6,6,0,0,0-1.44-3.9h0a4.77,4.77,0,0,1-1.14-3.13l.06-6,.07-1.32a1.44,1.44,0,0,0-2.12-1.2l-1.38.88a2.44,2.44,0,0,1-.91.3l-3.3.43-3.12.26a4.25,4.25,0,0,0-1.76.57Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M193.39,695l1.33,1.78,2.52,1.5,1.17-.84.83.84-.19.37a1.41,1.41,0,0,0,.47,1.83l3.55,2.35,4.32,3.89,5.38,3.75a7,7,0,0,0,2,1l5.88,1.88.37-3.87a7.68,7.68,0,0,0,0-1.59l-.47-4.59-.22-4.61.78-3a.59.59,0,0,0-.71-.73l-3.3.79-3.52-1.11.2-1.78-.22-3-1.74-3.32-1.94-3.06-2.06-2-3.66.69-2.57.31a2.35,2.35,0,0,0-2,1.68l0,.13a3.13,3.13,0,0,1-1.28,1.73l-3,1.93s-1,1-1.12.89.51.89.51.89l-1.12,1.71-.11.12A2.88,2.88,0,0,0,193.39,695Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            id="area5"
            class="cls-1"
            @mouseenter="handleMouseEnter('第一區', 'area5')"
            @mouseleave="handleMouseLeave('area5')"
            @click="handleAreaClick('第一校區', 'area5', 'first1.png')"
            d="M196.84,640.18l2,.19,1-1.4a2.61,2.61,0,0,1,1.8-.88l.51-.17a2.57,2.57,0,0,0,2.11-1.38l.22-.41.12-.65a1.77,1.77,0,0,0-1.39-2.08l-.29,0-.4-.08a2.51,2.51,0,0,0-2.15.58l-1.42,1.25-.35.69c-.81.83-1.94,1.92-2,3.07l.34,1.32"
            transform="translate(-159.2 -592.76)"
          />
          <path
            id="area2"
            class="cls-1"
            @mouseenter="handleMouseEnter('燕巢區', 'area2')"
            @mouseleave="handleMouseLeave('area2')"
            @click="handleAreaClick('燕巢校區', 'area2', 'yanchao1.jpg')"
            d="M204.15,636.93c-.19.42,1.08-2.89.72-3.18l-3.64-.72c-.57-.5-4.28,4-3.69,3.82l1.34-1.75c.51-.34.19-1.72-.06-2.27l-.77-.68a.63.63,0,0,0-1-.22h0a4.12,4.12,0,0,1-2.68,1h0a3.69,3.69,0,0,1,0-1.95l.44-1.68,0-.74a1.54,1.54,0,0,0-.68-1.22h0a2.72,2.72,0,0,1,.89-2.53l.52-.45,1-.93,1.12-.4,2.56-1.25.06,0c2.25.1,2.91-1.26,1.81-3h0a.6.6,0,0,1,.19-.56l1.46-1.28a1.15,1.15,0,0,1,1.64.13h0a.83.83,0,0,0,.94.23h0a1.05,1.05,0,0,1,1,.12l.78.54.9-.06a1.32,1.32,0,0,1,1.24.69h0a1.24,1.24,0,0,0,1.53.56h0a.63.63,0,0,1,.55.07l1.25.83a2.68,2.68,0,0,0,1.7.43l.95-.1a1.79,1.79,0,0,1,1.55.66l.27.34h0a1,1,0,0,1,1,1h0a2,2,0,0,0,.49,1.34l.59.67a1.58,1.58,0,0,1,.28,1.57h0l.84.53a3.46,3.46,0,0,1,1.52,2h0a.72.72,0,0,1-.09.57l-.54.87,0,.09a2.52,2.52,0,0,1-1.65,1.08h0a1.37,1.37,0,0,0-1.07.89l-.06.16a2.18,2.18,0,0,0-.12,1.13l.13.78-.43,1h0a1.13,1.13,0,0,1-1.52-.12l-.9-1a.79.79,0,0,0-1.1,0l-.59.65a.87.87,0,0,1-1.22.09h0a1.69,1.69,0,0,0-1.35-.36l-.32.15a1.61,1.61,0,0,0-.82.39l-2.46,2.33-3.68.26-1.3-.28"
            transform="translate(-159.2 -592.76)"
          />
          <path
            id="area3"
            class="cls-1"
            @mouseenter="handleMouseEnter('楠梓區', 'area3')"
            @mouseleave="handleMouseLeave('area3')"
            @click="handleAreaClick('楠梓校區', 'area3', 'nanzih1.jpeg')"
            d="M196.49,639.78l-.24.78-.3,2.19s0,0,0,0l-1.58-.61a2.13,2.13,0,0,0-1.17-.11l-.16,0a.53.53,0,0,0-.44.48h0a1.39,1.39,0,0,1-1.38,1.28h-1.11a1.22,1.22,0,0,1-1-.47L188,642a.51.51,0,0,0-.41-.2l-2.18,0a1.44,1.44,0,0,0-1.21.61l-.32.44a.92.92,0,0,1-.82.39l-.33,0a1.52,1.52,0,0,0-1.33.6l-1.51,2a1.29,1.29,0,0,0-.24.91l.23,1.87a1.62,1.62,0,0,0,.19.6l1.14,2.08a.16.16,0,0,0,.27,0l1-1.27,3.2.19,2.87-.15a.42.42,0,0,0,.28-.14,8.21,8.21,0,0,1,.84-.93,2.63,2.63,0,0,1,.4.61.43.43,0,0,1-.15.58h0a.4.4,0,0,0,0,.66l.78.64,1.58,1.31s0,0,.05,0l1.14-.83h0a1.13,1.13,0,0,0,1.65-.08l1.58-1.87.4-.65a1.72,1.72,0,0,0-.09-2h0a.78.78,0,0,1,.27-1.16l.82-.41a3.69,3.69,0,0,0,1.41-1.28l.2-.32a2.71,2.71,0,0,0,.42-1.75l-.34-3.16c0-.27-1.33,1.2-1.57.94"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M198.17,640.29l-1.77-.22"
            transform="translate(-159.2 -592.76)"
          />
          <path
            id="area4"
            class="cls-1"
            @mouseenter="handleMouseEnter('旗津區', 'area4')"
            @mouseleave="handleMouseLeave('area4')"
            @click="handleAreaClick('旗津校區', 'area4', 'cijin1.png')"
            d="M179.89,673.72l.87.94a3,3,0,0,1,.71,2.7h0a1.25,1.25,0,0,0,.24,1l8.48,10.47a2.14,2.14,0,0,1,.29,2.2l-.2.44a.92.92,0,0,0,.56,1.24h0a1.37,1.37,0,0,0,1.28-.24l2.15-1.73a1.2,1.2,0,0,0,.2-1.66l-6.32-8.22a21.35,21.35,0,0,1-1.71-2.58l-1.34-2.42a2.86,2.86,0,0,0-1.4-1.14L180,673.58A.09.09,0,0,0,179.89,673.72Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            id="area6"
            class="cls-1"
            @mouseenter="handleMouseEnter('三民區', 'area6')"
            @mouseleave="handleMouseLeave('area6')"
            @click="handleAreaClick('建工校區', 'area6', 'jiangong1.jpg')"
            d="M196.6,657.62l.27.42a1.29,1.29,0,0,0,.93.59l1.39.19a.51.51,0,0,1,.34.82l-.73,1a.78.78,0,0,0-.08.84l.12.23a.46.46,0,0,1-.41.68h-.31a.09.09,0,0,0-.06.16l2.94,2.9a1.43,1.43,0,0,1,.33.47l.45,1a1.29,1.29,0,0,1-.11,1.26l-.2.29a1,1,0,0,1-1,.43l-4.42-.69a.85.85,0,0,0-.84.38l-.15.22a.89.89,0,0,1-.95.37l-2.44-.57a2.1,2.1,0,0,0-.9,0l-3.35.86a.7.7,0,0,1-.87-.68v-.68a1.27,1.27,0,0,0-.15-.6l-.41-.76a.74.74,0,0,1,.12-.87l.6-.62a2.35,2.35,0,0,1,1.42-.72l2.43-.31a1.94,1.94,0,0,0,.33-.07l.92-.29a2.19,2.19,0,0,0,1.54-2.07h0a1.66,1.66,0,0,1,.32-1l2.24-3.19A.41.41,0,0,1,196.6,657.62Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M180.13,598.2l.23,1a4.29,4.29,0,0,1,.13,1.07v1.25a.54.54,0,0,1-.4.52h0a2,2,0,0,0-1.39,1.3c-.25.77-.56,1.7-.6,1.78a8.17,8.17,0,0,1-1.46.67,2.35,2.35,0,0,1-.86.17h-.92a4.76,4.76,0,0,0-.84.07l-1.1.18-.73-.52a1.47,1.47,0,0,0-1.57-.1c-.07,0-.12.09-.12.11a6.93,6.93,0,0,1-.25.73,2.71,2.71,0,0,0,0,1.8,3.49,3.49,0,0,1,.27,1,3.18,3.18,0,0,0-.57.51,1.38,1.38,0,0,0-.19,1.71l.2.29a3.49,3.49,0,0,0,.83.92l.72.56a3.34,3.34,0,0,0,1.43.66l1.56.31s1.81,1.88,1.81,2a24.57,24.57,0,0,0,2.92.48.36.36,0,0,1,.29.25h0a2.64,2.64,0,0,0,1.64,1.77l2,.76a22.16,22.16,0,0,0,2.43.69,18.62,18.62,0,0,0,2-1.78,2.84,2.84,0,0,0,.91-2.31c0-.44-.06-.83-.06-.91a20.76,20.76,0,0,1,.93-2,3.68,3.68,0,0,1,.65-.91l.13-.13a5,5,0,0,0,1.44-3.51v-1c0-.09,0-.18,0-.27l-.21-2.87a2,2,0,0,0-1.57-1.77h0a4.09,4.09,0,0,1-2.51-1.64l-.33-.47a2.68,2.68,0,0,0-1.79-1.11l-1.21-.19a4.39,4.39,0,0,1-1.27-.41l-2.06-1.06A.39.39,0,0,0,180.13,598.2Z"
            transform="translate(-159.2 -592.76)"
          />
          <path
            class="cls-2"
            d="M185,633.73l0,0a.91.91,0,0,0,1.1-.17l.58-.58a1.17,1.17,0,0,1,.84-.36h.65l1.24-.81.74-.64a.71.71,0,0,1,.95,0l.51.49a.66.66,0,0,0,.52.17l.45-.07a.65.65,0,0,1,.6.23l.87,1.05a.65.65,0,0,0,.68.19l2.26-.75a1.42,1.42,0,0,1,1.06.24l.37,1c-.11.52-.07,2.2-.46,2.44l-.9.68c-.3,0-.56.29-.59.66l-.24,2.59a10,10,0,0,1-.54,2.29c-.19,0-2-.52-2-.52s-1.25.13-1.17.22a.63.63,0,0,1,0,.29,1.49,1.49,0,0,1-1.48,1.39h-1.66l-1.24-1.53a1.31,1.31,0,0,0-1-.49l-1.71,0a1.67,1.67,0,0,0-1.39.7l-.19.27a1.09,1.09,0,0,1-1,.46l-.78-.06a.48.48,0,0,1-.4-.28h0a1.66,1.66,0,0,1,.2-1.76l.49-.62a2.64,2.64,0,0,0,.23-.35l1.29-2.53.48-1.24a1.74,1.74,0,0,0,.11-.75l-.13-1.55A.36.36,0,0,1,185,633.73Z"
            transform="translate(-159.2 -592.76)"
          />
        </svg>
      </div>
      <!-- 校區信息顯示區域 -->
      <div
        class="info-card"
        v-show="currentView === 'campus' && selectedAreaName"
      >
        <img :src="selectedAreaImages.default" alt="校區圖片" />
        <div class="icon-text">
          <div class="icon-content">
            <q-icon name="school" size="24px" class="school-icon" />
            <h4>{{ selectedAreaName }}</h4>
          </div>
          <div class="icon-content">
            <q-icon name="place" size="24px" style="color: #5c5c5c" />
            <h6>{{ selectedAddress }}</h6>
          </div>
          <div class="icon-content">
            <q-icon name="phone" size="24px" style="color: #5c5c5c" />
            <h6>{{ selectedPhone }}</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- S 廊道圖 -->
    <div v-if="currentView === 'hallway'" class="hallway-container">
      <img class="s-map" src="/image/map/S_Map2.png" alt="S廊道圖片" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const tooltipVisible = ref(false);
const regionName = ref("");
const selectedAreaName = ref("");
const selectedAddress = ref("");
const selectedPhone = ref("");
const selectedImage = ref("");
let previousAreaId = null; // 用來追蹤上一次點選的區域

const currentView = ref(""); // 當前顯示的視圖，預設為校區分布圖

// 切換視圖並重置狀態
function switchView(view) {
  currentView.value = view;

  if (view === "campus") {
    // 顯示校區分布圖時重置
    resetCampusState();
  } else if (view === "hallway") {
    // 顯示 S 廊道圖時，重置其他內容
    resetCampusState();
  }
}

// 重置校區相關狀態
function resetCampusState() {
  selectedAreaName.value = "";
  selectedAddress.value = "";
  selectedPhone.value = "";
  selectedImage.value = "";
  previousAreaId = null;

  // 重置地圖區域顏色
  const areas = document.querySelectorAll(".cls-1");
  areas.forEach((area) => {
    area.style.fill = "#5b5c5c"; // 回到預設顏色
  });
}

const selectedAreaImages = computed(() => {
  return { default: selectedImage.value };
});

const campusDetails = {
  旗津校區: {
    address: "805高雄市旗津區中洲三路1號",
    phone: "07-5721000",
    image: new URL("/image/map/cijin1.png", import.meta.url).href,
  },
  建工校區: {
    address: "807高雄市三民區建工路415號",
    phone: "07-3814526",
    image: new URL("/image/map/jiangong1.jpg", import.meta.url).href,
  },
  燕巢校區: {
    address: "824高雄市燕巢區深中路58號",
    phone: "07-3814526",
    image: new URL("/image/map/yanchao1.jpg", import.meta.url).href,
  },
  "湖內校區(114/08/01接管)": {
    address: "829高雄市湖內區東方路110號",
    phone: "07-6011000",
    image: new URL("/image/map/hu1.jpg", import.meta.url).href,
  },
  第一校區: {
    address: "824高雄市燕巢區大學路1號",
    phone: " 07-601000",
    image: new URL("/image/map/first1.png", import.meta.url).href,
  },
  楠梓校區: {
    address: "811高雄市楠梓區海專路142號",
    phone: "07-6011000",
    image: new URL("/image/map/nanzih1.jpeg", import.meta.url).href,
  },
};

// 監聽 selectedAreaName 的變化
watch(
  selectedAreaName,
  (newValue) => {
    if (campusDetails[newValue]) {
      selectedAddress.value = campusDetails[newValue].address;
      selectedPhone.value = campusDetails[newValue].phone;
      selectedImage.value = campusDetails[newValue].image;
    } else {
      selectedAddress.value = "";
      selectedPhone.value = "";
      selectedImage.value = "";
    }
  },
  { immediate: true } // 確保初始值也能觸發
);

function handleMouseEnter(region, areaId) {
  regionName.value = region;
  tooltipVisible.value = true;

  const area = document.getElementById(areaId);
  if (area) {
    area.style.fill = "orange";
    area.style.transition = "fill 0.5s ease";
  }
}

function handleMouseLeave(areaId) {
  if (areaId !== previousAreaId) {
    const area = document.getElementById(areaId);
    if (area) {
      area.style.fill = "#5b5c5c"; // 恢復灰色
    }
  }
}

// 點擊區域處理：將選中的區域保持橘色，並將上次點選的區域變回灰色
function handleAreaClick(areaName, areaId, imagePath) {
  if (previousAreaId) {
    const previousArea = document.getElementById(previousAreaId);
    if (previousArea) {
      previousArea.style.fill = "#5b5c5c"; // 將上一個區域設為灰色
    }
  }

  const currentArea = document.getElementById(areaId);
  if (currentArea) {
    currentArea.style.fill = "orange"; // 將當前選中的區域設為橘色
  }

  selectedAreaName.value = areaName;
  selectedImage.value = new URL(`/image/map/${imagePath}`, import.meta.url).href;
  previousAreaId = areaId; // 更新 previousAreaId
}
</script>

<style scoped>
.map-container {
  width: 60%;
  margin: auto;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 96px;
  margin-bottom: 20px;
}

.button-container button {
  padding: 12px 28px;
  margin: 0;
  font-size: 20px;
  border: 1.5px solid #a0a0a0;
  border-radius: 180px;
  cursor: pointer;
  background-color: #fff;
  color: #666;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.button-container button:hover {
  background-color: #f5f5f5;
  border-color: #888;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.svg-wrapper {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex: 1;
  max-width: 40%; /* 限制最大寬度 */
  margin: auto; /* 保證居中對齊 */
}

.info-card {
  flex: 0 1 auto;
  padding: 10px;
  max-width: 30%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 卡片陰影效果 */

  /* Flexbox 設置 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 圖片水平置中 */
}

.s-map {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex: 1;
  max-width: 40%; /* 限制最大寬度 */
  margin: auto; /* 保證居中對齊 */
}

.split-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 讓容器填滿整個 info-card 區域 */
  height: 100%;
}

.split-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45%; /* 確保兩個區域平分 */
}

.split-divider {
  width: 2px;
  background: #ccc;
  height: 100%;
  border-left: 1px dashed #999;
  margin: 0 10px;
}

.icon-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 讓內容靠左對齊 */
  margin-top: 10px;
}

.icon-content {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* 每組內容之間的間距 */
}

.icon-content q-icon {
  margin-right: 8px; /* 圖標與文字之間的間距 */
}

.school-icon {
  margin-right: 8px; /* 與文字間距 */
  color: #5c5c5c; /* 使用 Quasar 預設色彩系統，改成綠色 */
}

img {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

h4 {
  font-size: 24px; /* 可根據需求調整文字大小 */
  margin: 0; /* 去掉預設 margin */
}

h6 {
  font-size: 16px; /* 可根據需求調整文字大小 */
  margin: 0; /* 去掉預設 margin */
}

.cls-1 {
  fill: #5b5c5c;
  transition: fill 0.5s ease; /* 設置動畫過渡效果 */
}
.cls-1,
.cls-2 {
  stroke: #040000;
  stroke-miterlimit: 10;
}
.cls-2 {
  fill: none;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* 與地圖保持間距 */
}


/* RWD 媒體查詢：小螢幕顯示為垂直布局 */
@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .svg-wrapper {
    max-width: 100%;
    margin-bottom: 20px; /* 增加 SVG 與 Info Card 的間距 */
  }

  .info-card {
    max-width: 100%; /* 卡片佔滿寬度 */
    margin-bottom: 10%;
  }
  .s-map {
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    flex: 1;
    max-width: 80%; /* 限制最大寬度 */
    margin: auto; /* 保證居中對齊 */
  }
  .button-container button {
    font-size: 17px;
    padding: 10px 22px;
    border-radius: 180px;
  }
}
</style>
