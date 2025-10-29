"use client";

import { memo, Fragment } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface BulletPoint {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface SplitAboutProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  bulletPoints: BulletPoint[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  ariaLabel?: string;
  imagePosition?: "left" | "right";
  layout?: "default" | "split";
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  contentClassName?: string;
  bulletPointClassName?: string;
  bulletTitleClassName?: string;
  bulletDescriptionClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
}

const SplitAbout = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  bulletPoints,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "About section video",
  ariaLabel = "About section",
  imagePosition = "right",
  layout = "default",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  contentClassName = "",
  bulletPointClassName = "",
  bulletTitleClassName = "",
  bulletDescriptionClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
}: SplitAboutProps) => {
  const mediaContent = (
    <div className={cls("w-full md:w-6/10 2xl:w-7/10 overflow-hidden rounded-theme-capped card relative p-4", mediaWrapperClassName)}>
      <div className="relative w-full h-full">
        <MediaContent
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          imageAlt={imageAlt}
          videoAriaLabel={videoAriaLabel}
          imageClassName={cls("absolute inset-0 w-full h-full object-cover rounded-theme-capped", imageClassName)}
        />
      </div>
    </div>
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full py-30", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
        <CardStackTextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          layout={layout}
          textBoxClassName={textBoxClassName}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          tagClassName={tagClassName}
          buttonContainerClassName={buttonContainerClassName}
          buttonClassName={buttonClassName}
          buttonTextClassName={buttonTextClassName}
        />

        <div className={cls("flex flex-col md:flex-row gap-6 md:items-stretch")}>
          {imagePosition === "left" && mediaContent}

          <div className={cls("w-full md:w-4/10 2xl:w-3/10 rounded-theme-capped card p-6 flex flex-col gap-6 justify-center", contentClassName)}>
            {bulletPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Fragment key={index}>
                  <div className={cls("flex flex-col gap-2", bulletPointClassName)}>
                    {Icon && (
                      <div className="h-10 w-fit aspect-square rounded-theme primary-button flex items-center justify-center flex-shrink-0 mb-1">
                        <Icon className="h-[40%] w-[40%] text-background" strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="flex flex-col gap-0">
                      <h3 className={cls("text-xl font-medium", bulletTitleClassName)}>
                        {point.title}
                      </h3>
                      <p className={cls("text-base leading-[1.4] text-foreground", bulletDescriptionClassName)}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                  {index < bulletPoints.length - 1 && (
                    <div className="w-full border-b border-accent/10" />
                  )}
                </Fragment>
              );
            })}
          </div>

          {imagePosition === "right" && mediaContent}
        </div>
      </div>
    </section>
  );
};

SplitAbout.displayName = "SplitAbout";

export default memo(SplitAbout);
