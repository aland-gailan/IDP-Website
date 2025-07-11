function showRegistrationClosed() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    // Create modal
    const modal = document.createElement('div');
    modal.style.background = '#fff';
    modal.style.borderRadius = '18px';
    modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
    modal.style.padding = '32px 32px 24px 32px';
    modal.style.textAlign = 'center';
    modal.style.maxWidth = '90vw';
    modal.style.maxHeight = '90vh';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';

    // Message
    const msg = document.createElement('div');
    msg.textContent = 'Registration is not open yet.';
    msg.style.fontSize = '2.2rem';
    msg.style.fontWeight = 'bold';
    msg.style.color = '#162398';
    msg.style.marginBottom = '24px';

    // Cat image
    const img = document.createElement('img');
    img.src = 'cat.jpg';
    img.alt = 'Cat';
    img.style.width = '500px';
    img.style.maxWidth = '100%';
    img.style.height = '200px';
    img.style.objectFit = 'fill';
    img.style.borderRadius = '12px';
    img.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
    img.style.marginBottom = '18px';
    img.style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)';

    // Close button
    const btn = document.createElement('button');
    btn.textContent = 'لا بشرفک';
    btn.style.marginTop = '12px';
    btn.style.padding = '10px 28px';
    btn.style.fontSize = '1.1rem';
    btn.style.background = '#162398';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => document.body.removeChild(overlay);

    // Pet cat button
    const petBtn = document.createElement('button');
    petBtn.textContent = 'Pet cat';
    petBtn.style.marginTop = '12px';
    petBtn.style.marginLeft = '12px';
    petBtn.style.padding = '10px 28px';
    petBtn.style.fontSize = '1.1rem';
    petBtn.style.background = '#f5a623';
    petBtn.style.color = '#fff';
    petBtn.style.border = 'none';
    petBtn.style.borderRadius = '8px';
    petBtn.style.cursor = 'pointer';
    petBtn.onclick = () => {
        const audio = new Audio('mao.mp3');
        audio.play();
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            img.style.transform = '';
        }, 1000);
    };

    modal.appendChild(msg);
    modal.appendChild(img);
    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.justifyContent = 'center';
    btnContainer.appendChild(btn);
    btnContainer.appendChild(petBtn);
    modal.appendChild(btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    return false;
}
