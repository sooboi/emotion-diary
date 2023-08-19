import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `오늘의 일기 - 새 일기 작성`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
