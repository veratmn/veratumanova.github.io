/**
 * Toggle bio expanded / collapsed (3-line clamp)
 * @param {HTMLButtonElement} btn
 */
function toggleBio(btn) {
    const bioText = document.getElementById('bio-text');
    const chevron = btn.querySelector('.chevron');
    const isExpanded = bioText.classList.contains('expanded');

    if (isExpanded) {
        bioText.classList.remove('expanded');
        chevron.classList.add('rotated');
        btn.setAttribute('aria-expanded', 'false');
    } else {
        bioText.classList.add('expanded');
        chevron.classList.remove('rotated');
        btn.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Toggle experience card body open / closed
 * @param {HTMLButtonElement} header
 */
function toggleExp(header) {
    const body = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    const isOpen = body.classList.contains('open');

    if (isOpen) {
        body.classList.remove('open');
        chevron.classList.add('rotated');
        header.setAttribute('aria-expanded', 'false');
    } else {
        body.classList.add('open');
        chevron.classList.remove('rotated');
        header.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Toggle interpersonal skill descriptions open / closed.
 * @param {HTMLButtonElement} btn
 */
function toggleSkills(btn) {
    const skillsList = btn.closest('.skills-inner').querySelector('.skills-list');
    const chevron = btn.querySelector('.chevron');
    const isOpen = skillsList.classList.contains('open');

    if (isOpen) {
        skillsList.classList.remove('open');
        chevron.classList.add('rotated');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Show skill descriptions');
    } else {
        skillsList.classList.add('open');
        chevron.classList.remove('rotated');
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Hide skill descriptions');
    }
}

/**
 * Open the default email client with a pre-filled "Job Opportunity" template.
 * Using JS-constructed mailto ensures subject + body are always passed correctly
 * across all browsers and email clients (Apple Mail, Outlook, Gmail, etc.)
 * @param {MouseEvent} e
 */
function openEmail(e) {
    e.preventDefault();

    var subject = 'Job Opportunity';
    var body = [
        'Hi Vera,',
        '',
        'I came across your profile and would love to discuss a potential opportunity.',
        '',
        "Here's a bit about the role:",
        '',
        '[Your message here]',
        '',
        'Looking forward to hearing from you,',
        '[Your name]'
    ].join('\n');

    window.location.href =
        'mailto:tumanovavd@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body='    + encodeURIComponent(body);
}
