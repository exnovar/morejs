document.getElementById('demobattan').addEventListener('click', function() {
    console.log('ouch')
    const data = {
        name: 'Banana'
    };

    fetch('/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

