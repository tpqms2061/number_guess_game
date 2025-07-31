import { useState } from "react";

const getRandomTarget = () => Math.floor(Math.random() * 100) + 1;
// Math.floor : 내림 Math.random(): 0 <= x< 1

const NumberGuessGame = () => {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState(""); // input 하나 나오면 그에 맞는 useState를 하나 만들어야됨
  const [message, setMessage] = useState("");
  const [isWin, setIsWin] = useState(false);
  const [history, setHistory] = useState([]); //입력했던 값 - 배열인 이유 입력했던 값들이라

  const handleSubmit = () => {
    console.log("타겟:", target);

    const num = Number(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("⚠️ 1부터 100 사이의 숫자를 입력하세요.");
      return;
    }

    setHistory([...history, num]); //배열은 거의 스프레드랑 같이 씀 -push 잘안씀

    if (num === target) {
      setMessage(`🎉 정답! ${target}입니다.`);
      setIsWin(true);
    } else if (num < target) {
      setMessage("⬆️ 더 큰 수를 입력하세요.");
    } else {
      setMessage("⬇️ 더 작은 수를 입력하세요.");
    }

    setGuess(""); //입력후 초기화
  };

  //초기화 버튼
  const handleRestart = () => {
    setTarget(getRandomTarget);
    setMessage("");
    setIsWin(false);
    setHistory([]);
  };

  return (
    <div className=" flex flex-col items-center gap-8 p-8 bg-white shadow-xl rounded-xl max-w-md">
      <h1 className="text-2xl font-bold">숫자 맞추기 게임</h1>
      <p className="text-gray-600">1~100사이의 숫자를 맞춰보세요~</p>
      <input
        className="border border-gray-400 rounded-lg px-4 w-40 text-center focus:outline-none"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isWin} //정답 맞추면 입력 x
      />
      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50"
        onClick={handleSubmit}
        disabled={isWin} //정답 맞추면 입력 x
      >
        제출
      </button>
      {/* hover : 마우스 올렸을 때 효과 */}
      <p className="text-lg font-medium">{message}</p>

      <div className="w-full">
        <h2 className="font-semibold mb-2">
          입력 기록
          <ul className="list-disc list-inside text-sm text-gray-600">
            {history.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </h2>
      </div>

      {isWin && (
        <button
          className="mt-4 px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 "
          onClick={handleRestart}
        >
          다시 시작
        </button>
      )}
      {/* // && : 앞에 조건을 만족하면 뒤에 기능이 생성  */}
    </div>
  );
};

export default NumberGuessGame;
