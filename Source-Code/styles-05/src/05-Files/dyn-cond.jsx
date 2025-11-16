import { useState } from "react";

function Dynamic() {

  let url = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgIDBAUHAf/EADsQAAICAQIDBAUJBwUAAAAAAAABAgMEBREhMVEGEkFxE2GBwdEUIiMyQlJykbEzYpKhsuHwJCVEU5P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AO4gAAAAAKZzjCLlOSjFc23skaDUO09FO8MKHppr7b4RXxAkO5j35uLj/t8iqt9JSSZBsvV8/Lb9LkSUfuw+av5GCBPJ6/pkOeUn+GEn+iKV2i0t/wDJf/nL4EFAHQatY0617QzKt+knt+pmQshOKlCSlF+Ke6OZFym+3Hl3qLJ1vrB7AdLBDcHtPl0NRyksiHjL6skSXT9UxdQj/p7PnLnXLhJewDNAAAAAAAAAAAxNR1CjT6HbfL8MVzk/UNTzqtPxZXWv1Riucn0IFnZl2dkO++Xek+S8IrogMjVNWyNRn9I+7Unwqi+Ht6mAAAAAAAAAAAPYTnXNTrk4TjxUovZo8AEq0XtF6Rxx89pTfCNvJPz6eZJEcxJJ2b1pwlDCzJ7wfCqyXh+6/cBKwAAAAApnOMIylN7Rit234IqI/wBrs70ONHEre07uM9vCK+PuYEf1nUZajluzj6KPCterr5swAAAAAAAADKo03NyIqVONNxfi+C/mXp6HqUVv8m3/AAzi/eDWvBXbVZTLuXVyrl0ktigAAAAAAmvZrVPluM6bnvfSlu3zlHqbo5zpuXLBza8iPKL+cusfE6JCcZwjOD3jJbp9UBUAADOfa3kvL1S+xP5ql3I+S4f55k6z7vk+FfcucK2157HNwAAAAACquErbI11xcpyeyivFku0nRacOMbLkrMjnv4R8viYPZTDT9JmTit0+5X6ur/T+ZIwzaAAIt5FFOTW6761OHR/5wIlrOkz0+XpK95483wk+cX0ZMS3fRDIpnTat4TWzCyufArvqnRfOqz60JNMoDQAABNuyuS79MVcnvKmTh7Oa+HsISSDsbd3c26nwnXv7U/7gS8AAaztJPuaLkvqor85IgfmTrtQt9EyPOP8AUiCgAAAAAE10CKjpGP3fFSb8+8zYGq7M3q3S4w+1VJxf6+82oYoAAAAAhnaOKjrF+3iot/wo1pm61esjVMiyL+b3u6vYtvcYQbAAANr2Ym461Ql9pST/AIX8DVGy7Nr/AHvF85f0sCegADB1yt26RlRS3fo217OPuOfHTZxU4ShJbqS2ZzbIqePfZTLnXJx/IC2AAAAA2Oh6gsDL+kf0NnCfq6P2E0i1JKUXunxTXic7cZKMZuLSl9V7czYaZq9+AlD9pR/1t8vJ+ASxNAavH1/Atiu/ZKqXScX+qL09Y06K3eXW/wAO7DOVnGt1zUlg4zhCX09i2gl4LqYGb2liouOFW5S8LJrZL2EeutnfbK26bnOXNvxCyKAezhKEnGcXGS5prZo8DQAABueyVff1ZS2+pXJ+73mmJT2Mx9q8jJa+s1Bezi/1QEmAAAhva3DdGcsiK+jvXFr7y/sTIwtXwVqGFOl/W5wfSS5Ac9B7OEq5yrsi4zi9pJ+DPABvdE0RZCjk5q+if1K/v+fqMbQdO+W5Lnat6KuMv3n4ImPgglqzfi0ZFHoLq1KvwXLby6Eczuzl1bcsOStj9yXCS9zJSAzKgF2HlUPa3Hth5xZajXOXCEJSfSMdzonI93fULqEYujZ2S13aHBP7VnzSQ6ZodGG1Zc1dauTa4R8kbUA1hanptOoV7WLa1fUsS4r4ohuZi24d8qb1tJfk11RPzA1nTo5+K1FbXQ41v3e0EqEgNbPZpprmn4ANPUnJpRTbfBJeJ0PSsT5DgU0cN4x3l5viyL9ldO+U5fyuyO9VL+b65f2+BMwAAAAACNdqNJdiebjR3ml9LFeK6kVOnNEdzuzsZahVfjJKl2J218tuO7a+AGbpGKsPT6qmtptd6fm/829hmABgAAAAAAAAAAEQ7S4qx9Q9JGO0Ll3uHXx9z9phafhW5+TGiheuUvCK6kq1zTrNRpqjRt6SNnFt8otcfcZ+l6dTp2Oq6lvJ8ZzfOTDUXsLGrxMeFFK2hFfn6y+AFAAAAAAAAW51qXFcy04uPNGSGt+YSxigvuuL4lDql6gmLYK/Ry6Hno5dAmKQV+jkVKrqFxaK41t8+BdjFR5IqC48iklsj0AKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="

  const [carstyle, setcardstyle] = useState(
    {
      textAlign: "center",
      width: "200px",
      border: "1px solid #cccccc3b",
      boxShadow: "1px 2px 3px 0px #cccccc57",
    }
  );
  const [textColor, settextColor] = useState("green")
  const [gride, setGride] = useState(true)

  let change = (bgcolor, textColor) => {
    setcardstyle({ ...carstyle, backgroundColor: bgcolor })
    settextColor(textColor)
  }

  return (
    <>
      <h2>Dynamic and conditional inline style</h2>

      <button onClick={() => change("#ccc", "red")}>changes</button>
      <button onClick={() => change("white", "black")}>default</button>
      <button onClick={() => setGride(!gride)}>toggle Gride</button>

      <div style={{ display: gride ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={carstyle}>
          <img style={{ width: "200px" }}
            src={url} alt="image" />
          <div style={{ padding: "5px", color: textColor }}>
            <h3>M-Ibrahim</h3>
            <h3>Web Developer</h3>
          </div>
        </div>

        <div style={carstyle}>
          <img style={{ width: "200px" }}
            src={url} alt="image" />
          <div style={{ padding: "5px", color: textColor }}>
            <h3>M-Ibrahim</h3>
            <h3>Web Developer</h3>
          </div>
        </div>

        <div style={carstyle}>
          <img style={{ width: "200px" }}
            src={url} alt="image" />
          <div style={{ padding: "5px", color: textColor }}>
            <h3>M-Ibrahim</h3>
            <h3>Web Developer</h3>
          </div>
        </div>
      </div>

    </>)
};
export default Dynamic;