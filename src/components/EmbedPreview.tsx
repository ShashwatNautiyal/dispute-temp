import type { Component } from "solid-js";

const PreviewImage: Component<{ url: string, alt?: string }> = (props) => (
  <img class="w-[72px] h-[72px] object-cover rounded-xl" src={props.url} alt={props.alt} />
);

const EmbedPreview: Component<{
  siteName: string,
  title: string,
  imageUrl: string
}> = (props) => (
  <div class="flex gap-2 p-2 rounded-[12px] bg-[#f5f5f5]">
    <PreviewImage url={props.imageUrl} />

    <div class="w-[280px]">
      <div class="flex flex-col gap-[2px]">
        <span class="text-[13px] leading-5 font-normal text-[#494949]">{props.siteName}</span>
        <p class="text-[15px] leading-[150%] font-medium text-[#1D1D1F]">{props.title}</p>
      </div>
    </div>
  </div>
);

export default EmbedPreview;
