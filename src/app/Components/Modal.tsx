"use client";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "text" | "language";
  title?: string;
  content?: string;
  languages?: Array<{
    code: string;
    name: string;
  }>;
  onLanguageSelect?: (code: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  content,
  languages,
  onLanguageSelect,
}) => {
  // 添加 Esc 鍵監聽
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    // 添加事件監聽器
    document.addEventListener("keydown", handleEscKey);

    // 清理事件監聽器
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black opacity-0" onClick={onClose} />

      {/* 彈窗內容 */}
      <div className="relative border-2 border-black bg-[#F5F4EF] p-6 w-[90%] max-w-md">
        {/* 標題 */}
        {title && (
          <h2 className="text-xl font-bold mb-4 dark:text-black">{title}</h2>
        )}

        {/* 內容區域 */}
        {type === "text" && (
          <div className="text-gray-600 dark:text-black whitespace-pre-wrap break-words">
            {content}
          </div>
        )}

        {type === "language" && languages && (
          <div className="flex flex-col">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageSelect?.(lang.code)}
                className="m-1 hover:underline underline-offset-1 dark:text-black"
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
