const categories = {
            nature: {
                name: 'Nature',
                items: [
                    { name: 'Forest Path', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                    { name: 'Mountain View', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
                    { name: 'Ocean Waves', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
                    { name: 'Sunset Sky', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
                    { name: 'Desert Dunes', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
                ]
            },
            architecture: {
                name: 'Architecture',
                items: [
                    { name: 'Modern Building', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
                    { name: 'Glass Tower', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
                    { name: 'Historic Bridge', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
                    { name: 'Urban Skyline', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                    { name: 'Minimalist Home', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
                ]
            },
            abstract: {
                name: 'Abstract',
                items: [
                    { name: 'Color Flow', color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
                    { name: 'Geometric Shapes', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
                    { name: 'Light Patterns', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
                    { name: 'Texture Study', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
                    { name: 'Digital Art', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
                ]
            },
            portraits: {
                name: 'Portraits',
                items: [
                    { name: 'Studio Portrait', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
                    { name: 'Street Style', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
                    { name: 'Natural Light', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
                    { name: 'Black & White', color: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
                    { name: 'Environmental', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }
                ]
            }
        };

        let currentFilter = 'all';

        function renderGallery() {
            const grid = document.getElementById('galleryGrid');
            grid.innerHTML = '';

            Object.keys(categories).forEach(categoryKey => {
                if (currentFilter === 'all' || currentFilter === categoryKey) {
                    const category = categories[categoryKey];
                    const firstItem = category.items[0];
                    
                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    item.style.background = firstItem.color;
                    item.dataset.category = categoryKey;
                    
                    item.innerHTML = `
                        <div class="item-info">
                            <h3>${category.name}</h3>
                            <p>${category.items.length} images</p>
                        </div>
                    `;
                    
                    item.addEventListener('click', () => openDropdown(categoryKey));
                    grid.appendChild(item);
                }
            });
        }

        function openDropdown(categoryKey) {
            const category = categories[categoryKey];
            const dropdown = document.getElementById('dropdown');
            const overlay = document.getElementById('dropdownOverlay');
            const title = document.getElementById('dropdownTitle');
            const grid = document.getElementById('dropdownGrid');

            title.textContent = category.name;
            grid.innerHTML = '';

            category.items.forEach(item => {
                const dropdownItem = document.createElement('div');
                dropdownItem.className = 'dropdown-item';
                dropdownItem.style.background = item.color;
                dropdownItem.innerHTML = `
                    <div class="dropdown-item-name">${item.name}</div>
                `;
                grid.appendChild(dropdownItem);
            });

            dropdown.classList.add('active');
            overlay.classList.add('active');
        }

        function closeDropdown() {
            const dropdown = document.getElementById('dropdown');
            const overlay = document.getElementById('dropdownOverlay');
            dropdown.classList.remove('active');
            overlay.classList.remove('active');
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.category;
                renderGallery();
            });
        });

        // Close dropdown
        document.getElementById('closeBtn').addEventListener('click', closeDropdown);
        document.getElementById('dropdownOverlay').addEventListener('click', closeDropdown);

        // Initial render
        renderGallery();