document.getElementById('submitButton').addEventListener('click', function() {
    // テキストフィールドの値を取得
    const inputText = document.getElementById('inputText').value;

    // 送信データを作成
    const data = {
        inputText: inputText
    };

    // fetchを使ってデータをPOSTで送信
    fetch('https://example.com/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // JavaScriptオブジェクトをJSON形式に変換
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('サーバーエラーが発生しました');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);  // 成功時の処理
        alert('送信に成功しました！');  // アラート表示
    })
    .catch((error) => {
        console.error('Error:', error);  // エラー時の処理
        alert('送信に失敗しました。もう一度お試しください。');  // エラー時のアラート
    });
});
