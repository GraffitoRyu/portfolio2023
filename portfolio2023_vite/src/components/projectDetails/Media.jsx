import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// util
import getDetailsData from "../../hooks/util/getDetailsData";
import { useCallback, useEffect, useRef } from "react";

export default function DetailsMedia() {
  const [urlParams] = useSearchParams();
  const d = getDetailsData(urlParams.get("category"));
  const md = d?.media;
  if (!d) return;

  return (
    <section className="details-section details-media w-full h-screen">
      {md.map((m, i) => (m.src ? <MediaSet key={i} {...m} /> : ""))}
    </section>
  );
}

function MediaSet(props) {
  if (props.referType == "image") return <ImageSet {...props} />;
  else if (props.referType == "video") return <VideoSet {...props} />;
  else return "";
}

function ImageSet(props) {
  if (!props || !props.src) return;
  const src = props?.src;
  const alt = props?.title;
  return <img src={src} alt={alt} />;
}

function VideoSet(props) {
  if (!props || !props.src) return;
  const src = props?.src;

  const videoRef = useRef();
  const { ref: videoViewRef, inView: videoView } = useInView();
  const videoMergeRef = useCallback(
    node => {
      videoRef.current = node;
      videoViewRef(node);
    },
    [videoViewRef]
  );

  useEffect(() => {
    if (videoRef?.current) {
      if (videoView) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [videoView]);

  return (
    <video className="projects-video" ref={videoMergeRef} preload="auto" loop>
      <source src={src} type="video/mp4" />
    </video>
  );
}
