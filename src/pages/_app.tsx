import React, { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import styles from "@/styles/App.module.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const handleRunCode = () => {
    const sourceCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(sourceCode);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Editor de Código Simples</h1>
      <div className={styles.editorWrapper}>
        <CodeEditor language="html" value={html} onChange={setHtml} title="HTML" />
        <CodeEditor language="css" value={css} onChange={setCss} title="CSS" />
        <CodeEditor language="javascript" value={js} onChange={setJs} title="JavaScript" />
      </div>
      <button className={styles.runButton} onClick={handleRunCode}>
        Rodar Código
      </button>
      <iframe
        srcDoc={srcDoc}
        title="output"
        className={styles.output}
      />
    </div>
  );
}

export default App;
