"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import styles from "./Next.module.scss";

const Next = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panels = sectionRef.current?.querySelectorAll("[data-panel]");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${4 * window.innerHeight}`,
          scrub: 1.5, //1.5초동안 같이 스르륵 멈추도록 작동
          pin: true, //섹션은 그대로 화면에 고정하고 그 안에서 패널/배경/텍스트만 변화
        },
      });

      panels?.forEach((item, idx) => {
        if (idx === 0) return;
        tl.fromTo(item, { yPercent: 100 }, { yPercent: 0, duration: 1 });
        // fromTo는 시작값과 종료값을 명확히 지정하는 GSAP 메서드, 100또는 1로만 제공
        // yPercent는 요소 자신의 높이를 기준으로 한 이동 비율이며
        // 100은 화면 아래 완전히 숨긴 상태, 0은 정상 위치를 의미한다
      });
    }, sectionRef);

    return () => {ctx.revert()};
  }, []);
  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.panel} ${styles.panel1}`} data-panel>
        <h2>첫번째 섹션</h2>
        <p>첫번째 화면입니다.</p>
      </div>
      <div className={`${styles.panel} ${styles.panel2}`} data-panel>
        <h2>두번째 섹션</h2>
        <p>두번째 화면입니다.</p>
      </div>
      <div className={`${styles.panel} ${styles.panel3}`} data-panel>
        <h2>세번째 섹션</h2>
        <p>세번째 화면입니다.</p>
      </div>
      <div className={`${styles.panel} ${styles.panel4}`} data-panel>
        <h2>네번째 섹션</h2>
        <p>네번째 화면입니다.</p>
      </div>
    </section>
  );
};

export default Next