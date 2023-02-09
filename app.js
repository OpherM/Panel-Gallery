      const openActive = document.querySelectorAll('.panel');

      function toggleOpen() {
        this.classList.toggle('open');
      }

      function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
        }
      }

      openActive.forEach((panel) =>
        panel.addEventListener('click', toggleOpen)
      );
      openActive.forEach((panel) =>
        panel.addEventListener('transitionend', toggleActive)
      );