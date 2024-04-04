import { forwardRef, useImperativeHandle, useRef, remainingTime } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref,
) {
  useRef();

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const resultMessage = userLost ? "lost" : "won";
  const formattedTime = (remainingTime / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      show() {
        dialog.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" open>
      <h2>You {resultMessage}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>{" "}
      </p>
      <p>
        You stopped the timer with <strong>{formattedTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
