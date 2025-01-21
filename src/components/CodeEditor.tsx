import React, { useState } from "react";
import styles from "@/styles/CodeEditor.module.css";

const CodeEditor: React.FC = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const iframeSrc = `
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

  return (
    <div className={styles.editorWrapper}>
      <h1 className={styles.editorHeader}>Editor de Código Simples</h1>
      <div className={styles.editor}>
        <div className={styles.editorColumn}>
          <div className={styles.editorTitle}>HTML</div>
          <textarea
            className={styles.textarea}
            placeholder="Escreva HTML aqui..."
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
        </div>
        <div className={styles.editorColumn}>
          <div className={styles.editorTitle}>CSS</div>
          <textarea
            className={styles.textarea}
            placeholder="Escreva CSS aqui..."
            value={css}
            onChange={(e) => setCss(e.target.value)}
          />
        </div>
        <div className={styles.editorColumn}>
          <div className={styles.editorTitle}>JavaScript</div>
          <textarea
            className={styles.textarea}
            placeholder="Escreva JS aqui..."
            value={js}
            onChange={(e) => setJs(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.preview}>
        <iframe
          srcDoc={iframeSrc}
          title="Code Preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
