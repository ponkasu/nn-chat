'use strict';
//一番下を表示
window.addEventListener('load', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

// エンターキーと Ctrl or Commandを押していたら送信
const formElement = document.forms['message-form']; // formの検索
const textareaElement = formElement.elements['content']; // 中身の文章
textareaElement.addEventListener('keydown', (event) => {
  // 送信キーを押したら
  if (isPressedSubmitKey(event)) {
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElement.submit();
  }
});

// 送信キーを押しているか判定
function isPressedSubmitKey(event) {
  if (event.key !== 'Enter') return false;
  if (event.ctrlKey) return true;
  if (event.metaKey) return true;
}

// ツールチップの有効化
const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerElements.forEach((tooltipTriggerElement) => {
  new bootstrap.Tooltip(tooltipTriggerElement);
});

// 投稿の編集ボタン
const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const content = card.querySelector('.post-content');
    const editForm = card.querySelector('.post-edit-form');

    // 投稿本文を隠して編集フォームを表示
    content.classList.add('d-none');
    editForm.classList.remove('d-none');

    // 編集ボタンを一時的に隠す
    button.classList.add('d-none');
  });
});

// キャンセルボタン
const cancelButtons = document.querySelectorAll('.cancel-edit');

cancelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const content = card.querySelector('.post-content');
    const editForm = card.querySelector('.post-edit-form');
    const editButton = card.querySelector('.edit-button');

    // 元の投稿表示に戻す
    content.classList.remove('d-none');
    editForm.classList.add('d-none');
    editButton.classList.remove('d-none');
  });
});