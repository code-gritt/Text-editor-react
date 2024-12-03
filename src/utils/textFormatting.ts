export function formatText(
  content: string,
  selection: { start: number; end: number } | null,
  type: string
): string {
  if (!selection) return content;

  const selectedText = content.substring(selection.start, selection.end);
  let formattedText = '';

  switch (type) {
    case 'bold':
      formattedText = `<strong>${selectedText}</strong>`;
      break;
    case 'italic':
      formattedText = `<em>${selectedText}</em>`;
      break;
    case 'underline':
      formattedText = `<u>${selectedText}</u>`;
      break;
    case 'left':
      formattedText = `<div style="text-align: left">${selectedText}</div>`;
      break;
    case 'center':
      formattedText = `<div style="text-align: center">${selectedText}</div>`;
      break;
    case 'right':
      formattedText = `<div style="text-align: right">${selectedText}</div>`;
      break;
    default:
      formattedText = selectedText;
  }

  return (
    content.substring(0, selection.start) +
    formattedText +
    content.substring(selection.end)
  );
}