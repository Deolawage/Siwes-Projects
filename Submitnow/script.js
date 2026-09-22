  document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('profileForm');
            const progressBar = document.getElementById('progress-bar');
            const completionStatus = document.getElementById('completion-status');
            const charCount = document.getElementById('charCount');
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnLoading = document.getElementById('btnLoading');
            const successModal = document.getElementById('successModal');
            const submittedSummary = document.getElementById('submittedSummary');
            const resetBtn = document.getElementById('resetBtn');
            const formErrorAlert = document.getElementById('formErrorAlert');

            // Status SVGs
            const SVGs = {
                valid: `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
                invalid: `<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
            };

            // Field definitions & rules
            const fields = {
                firstName: {
                    input: document.getElementById('firstName'),
                    group: document.getElementById('group-firstName'),
                    validate: (val) => val.trim().length >= 2,
                    errorMsg: 'First name must be at least 2 characters',
                    status: false
                },
                lastName: {
                    input: document.getElementById('lastName'),
                    group: document.getElementById('group-lastName'),
                    validate: (val) => val.trim().length >= 2,
                    errorMsg: 'Last name must be at least 2 characters',
                    status: false
                },
                email: {
                    input: document.getElementById('email'),
                    group: document.getElementById('group-email'),
                    validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
                    errorMsg: 'Please enter a valid email address',
                    status: false
                },
                about: {
                    input: document.getElementById('about'),
                    group: document.getElementById('group-about'),
                    validate: (val) => val.trim().length >= 10 && val.length <= 240,
                    errorMsg: 'Please write between 10 and 240 characters about yourself',
                    status: false
                }
            };

            // Calculate progress bar completion percentage
            function updateProgress() {
                const fieldKeys = Object.keys(fields);
                const totalFields = fieldKeys.length;
                let validCount = 0;

                fieldKeys.forEach(key => {
                    if (fields[key].status) {
                        validCount++;
                    }
                });

                const percentage = Math.round((validCount / totalFields) * 100);
                progressBar.style.width = `${percentage}%`;
                completionStatus.textContent = `${percentage}% completed`;
            }

            // Real-time field validation logic
            function validateField(key, showErrorsImmediately = false) {
                const config = fields[key];
                const value = config.input.value;
                const group = config.group;
                const statusContainer = group.querySelector('.validation-status');
                const errorElement = group.querySelector('.error-msg');

                if (value === '' && !showErrorsImmediately) {
                    group.classList.remove('is-valid', 'is-invalid');
                    statusContainer.innerHTML = '';
                    errorElement.classList.add('hidden');
                    config.status = false;
                    updateProgress();
                    return false;
                }

                const isValid = config.validate(value);
                config.status = isValid;

                if (isValid) {
                    group.classList.remove('is-invalid');
                    group.classList.add('is-valid');
                    statusContainer.innerHTML = SVGs.valid;
                    errorElement.classList.add('hidden');
                } else {
                    group.classList.remove('is-valid');
                    group.classList.add('is-invalid');
                    statusContainer.innerHTML = SVGs.invalid;
                    errorElement.textContent = config.errorMsg;
                    errorElement.classList.remove('hidden');
                }

                updateProgress();
                return isValid;
            }

            // Textarea character counter & auto-resize
            const aboutInput = fields.about.input;
            aboutInput.addEventListener('input', (e) => {
                const length = e.target.value.length;
                charCount.textContent = `${length} / 240`;
                
                if (length > 220) {
                    charCount.classList.add('text-amber-400');
                    charCount.classList.remove('text-neutral-500');
                } else {
                    charCount.classList.remove('text-amber-400');
                    charCount.classList.add('text-neutral-500');
                }

                e.target.style.height = 'auto';
                e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;

                validateField('about');
            });

            // Bind input and blur events
            Object.keys(fields).forEach(key => {
                const field = fields[key];

                field.input.addEventListener('input', () => {
                    formErrorAlert.classList.add('hidden');
                    validateField(key, false);
                });

                field.input.addEventListener('blur', () => {
                    validateField(key, true);
                });
            });

            // Handle Client-Side Form Submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let allValid = true;

                // Validate every field before submission
                Object.keys(fields).forEach(key => {
                    const valid = validateField(key, true);
                    if (!valid) {
                        allValid = false;
                    }
                });

                if (!allValid) {
                    formErrorAlert.classList.remove('hidden');
                    return;
                }

                formErrorAlert.classList.add('hidden');

                // Enter loading state
                submitBtn.disabled = true;
                btnText.classList.add('hidden');
                btnLoading.classList.remove('hidden');

                // Simulate processing latency
                setTimeout(() => {
                    const firstName = fields.firstName.input.value.trim();
                    const email = fields.email.input.value.trim();

                    submittedSummary.textContent = `Welcome aboard, ${firstName}! We sent a confirmation to ${email}.`;

                    // Reset form and show success overlay
                    btnLoading.classList.add('hidden');
                    btnText.classList.remove('hidden');
                    submitBtn.disabled = false;

                    successModal.classList.remove('hidden');
                }, 700);
            });

            // Reset modal button action
            resetBtn.addEventListener('click', () => {
                form.reset();
                Object.keys(fields).forEach(key => {
                    fields[key].status = false;
                    fields[key].group.classList.remove('is-valid', 'is-invalid');
                    fields[key].group.querySelector('.validation-status').innerHTML = '';
                });
                charCount.textContent = '0 / 240';
                charCount.classList.remove('text-amber-400');
                charCount.classList.add('text-neutral-500');
                fields.about.input.style.height = 'auto';
                updateProgress();
                successModal.classList.add('hidden');
            });
        });