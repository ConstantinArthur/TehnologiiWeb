const apiUrl = 'http://localhost:8000/api/'

window.onload = () => {
    const btn = document.getElementById('searchBtn');
    btn.onclick = async () => {
        const id = document.getElementById('inputId').value;
        if (!id) return alert('Trebuie să introduci un ID');

        try {
            const res = await axios.get(apiUrl + 'getById/' + id);
            const output = document.getElementById('result');
            if (res.data.message) {
                output.textContent = res.data.message;
            } else {
                output.textContent = `ID: ${res.data.id}, Name: ${res.data.name}, Age: ${res.data.age}`;
            }
        } catch (err) {
            alert('Eroare');
        }
    };
};
