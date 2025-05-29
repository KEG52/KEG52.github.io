
    function openModal(id) {
      document.getElementById(id).style.display = "block";
    }

    function closeModal(id) {
      document.getElementById(id).style.display = "none";
    }

    // Optional: close modal when clicking outside
    window.onclick = function(event) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) modal.style.display = "none";
      });
    };
