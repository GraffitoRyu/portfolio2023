import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// util
import getDetailsData from "../../hooks/util/getDetailsData";
import replaceNewlineToBr from "../../hooks/util/replaceNewlineToBr";

export default function DetailsMedia() {
  const [urlParams] = useSearchParams();
  const d = getDetailsData(urlParams.get("category"));
  const md = d?.media;
  if (!d) return;

  return (
    <section className="details-section details-media w-full">
      {md.map((m, i) =>
        m.src ? (
          <figure className="media-contents w-full" key={i}>
            <MediaSet {...m} />
            <div className="media-info w-full text-center">
              <h4 className="w-full">{m.title}</h4>
              {m.desc ? (
                <p className="w-full">{replaceNewlineToBr(m.desc)}</p>
              ) : (
                ""
              )}
            </div>
          </figure>
        ) : (
          ""
        )
      )}
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
  return <img className="w-full" src={src} alt={alt} />;
}

function VideoSet(props) {
  if (!props || !props.src) return "";
  const src = props?.src;
  const videoRef = useRef();
  const [playState, setPlayState] = useState(false);
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
      setPlayState(videoView);
      if (videoView) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [videoView]);

  return (
    <video
      className="projects-video w-full"
      play-state={`${playState}`}
      ref={videoMergeRef}
      preload="auto"
      muted
      loop
      controls
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
