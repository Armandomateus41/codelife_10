import React from "react";
import styles from "@/styles/CodeEditor.module.css";

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  title: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange, title }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>{title}</h2>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        placeholder={`Escreva ${language.toUpperCase()} aqui...`}
      />
    </div>
  );
};

export default CodeEditor;
