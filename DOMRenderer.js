export class FormGenerator {
    constructor(formId,labelFor, inputId, buttonId, buttonText, labelForSecond, inputIdSecond) {
        this.formId = formId;
        this.labelFor = labelFor;
        this.inputId = inputId;
        this.labelForSecond = labelForSecond;
        this.inputIdSecond = inputIdSecond;
        this.buttonId = buttonId;
        this.buttonText = buttonText;

    }

    createFormSingleInput() {
        const form = document.createElement('form');
        form.id = this.formId;

        const label = document.createElement('label');
        label.setAttribute('for', this.inputId);
        label.textContent = this.labelFor;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = this.inputId;
        input.name = 'targetInput';
        input.required = true;

        const button = document.createElement('button');
        button.type = 'click';
        button.id = this.buttonId;
        button.textContent = this.buttonText;

        form.append(label, input, button);

        return form;
    }
    createFormDoubleInput(){
        const form = document.createElement('form');
        form.id = this.formId;

        const label1 = document.createElement('label');
        label1.setAttribute('for', this.inputId);
        label1.textContent = this.labelFor;

        const input1 = document.createElement('input');
        input1.type = 'number';
        input1.id = this.inputId;
        input1.name = 'targetInput1';
        input1.required = true;

        const label2 = document.createElement('label');
        label2.setAttribute('for', this.inputIdSecond);
        label2.textContent = this.labelForSecond;

        const input2 = document.createElement('input');
        input2.type = 'number';
        input2.id = this.inputIdSecond;
        input2.name = 'targetInput2';
        input2.required = true;

        const button = document.createElement('button');
        button.type = 'click';
        button.id = this.buttonId;
        button.textContent = this.buttonText;

        form.append(label1, input1, label2, input2, button);

        return form;
    }
}