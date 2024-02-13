import { useEffect, useState } from 'react';

export function Ticker({ titles }: { titles: string[] }): JSX.Element {
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isDelete, setIsDelete] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const profText = titles;
  const period = 2000;

  const type = (): void => {
    const idx = loopNum % profText.length;
    const fullText = profText[idx];
    const movingText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(movingText);

    if (isDelete) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDelete && movingText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && movingText === '') {
      setIsDelete(false);
      setLoopNum((prevNum) => prevNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const typer = setInterval(() => {
      type();
    }, delta);

    return () => {
      clearInterval(typer);
    };
  }, [text, delta]);

  return (
    <span className="border-r text-2xl lg:text-3xl font-semibold border-[#666]">
      { text }
    </span>
  );
}
