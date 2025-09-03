import { LightningElement, track } from 'lwc';

export default class ScCsvImport extends LightningElement {
    @track message = '';
    fileContent;
    isDisabled = true;

    // ファイル選択時
    handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            this.message = `選択されたファイル: ${file.name}`;
            this.isDisabled = false;

            // CSV内容を読み込み
            const reader = new FileReader();
            reader.onload = () => {
                this.fileContent = reader.result;
            };
            reader.readAsText(file, 'UTF-8');
        } else {
            this.message = 'ファイルが選択されていません。';
            this.isDisabled = true;
        }
    }

    // 取込ボタン押下時
    handleImport() {
        if (!this.fileContent) {
            this.message = 'CSVファイルを選択してください。';
            return;
        }
        // ここでApex呼び出しを行う想定
        this.message = 'CSVの取込処理を開始しました。（Apex未接続）';
    }
}
