const services = [
            {
                id: 1,
                title: 'Mural Painting',
                icon: '🎨',
                tag: 'Signature Service',
                subtitle: 'Transform spaces with large-scale art',
                image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                shortDesc: 'Custom murals that transform any space into an artistic masterpiece.',
                description: 'Our signature mural painting service brings life to walls, buildings, and public spaces. We specialize in creating custom, large-scale artworks that reflect your vision, brand identity, or community spirit.',
                features: [
                    'Custom designs tailored to your space and vision',
                    'Interior and exterior wall transformations',
                    'Weather-resistant materials for longevity',
                    'Community and commercial projects',
                    'Collaboration with architects and designers'
                ],
                pricing: 'Starting from $500 - Custom quotes based on size and complexity'
            },
            {
                id: 2,
                title: 'Portrait Art',
                icon: '👤',
                tag: 'Personal Touch',
                subtitle: 'Capture memories in stunning detail',
                image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                shortDesc: 'Personalized portraits that capture the essence of your loved ones.',
                description: 'Commission a custom portrait that captures the unique personality and essence of your subject. Whether traditional or contemporary, we create timeless pieces you\'ll treasure forever.',
                features: [
                    'Various styles: realistic, abstract, or modern',
                    'Multiple mediums: oil, acrylic, charcoal, or digital',
                    'Individual, couple, family, and pet portraits',
                    'High-resolution digital versions included',
                    'Framing options available'
                ],
                pricing: 'Starting from $200 - Varies by size and medium'
            },
            {
                id: 3,
                title: 'Digital Art',
                icon: '💻',
                tag: 'Modern Edge',
                subtitle: 'Contemporary art for the digital age',
                image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                shortDesc: 'Cutting-edge digital artwork for brands and collectors.',
                description: 'Embrace the future of art with our digital creations. Perfect for branding, social media, NFTs, and modern interior design. We blend technology with artistic vision to create unique digital masterpieces.',
                features: [
                    'Illustrations for branding and marketing',
                    'NFT artwork creation and consultation',
                    'Social media content and graphics',
                    'Print-ready files in multiple formats',
                    'Unlimited digital copies and commercial rights'
                ],
                pricing: 'Starting from $150 - Package deals available'
            },
            {
                id: 4,
                title: 'Art Workshops',
                icon: '🖌️',
                tag: 'Learn & Create',
                subtitle: 'Unleash your creative potential',
                image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                shortDesc: 'Interactive workshops for all skill levels and ages.',
                description: 'Join our engaging art workshops designed for beginners and experienced artists alike. Learn new techniques, explore different mediums, and connect with fellow art enthusiasts in a supportive environment.',
                features: [
                    'Beginner to advanced level classes',
                    'Various techniques: painting, drawing, mixed media',
                    'Small group sessions for personalized attention',
                    'All materials provided',
                    'Corporate team-building workshops available'
                ],
                pricing: 'From $50 per session - Group discounts available'
            }
        ];

        function renderServices() {
            const grid = document.getElementById('servicesGrid');
            
            services.forEach((service, index) => {
                const card = document.createElement('div');
                card.className = `service-card service-${service.id}`;
                card.onclick = () => openModal(service);
                
                card.innerHTML = `
                    <div class="service-image" style="background: ${service.image}"></div>
                    <div class="service-content">
                        <div class="service-icon">${service.icon}</div>
                        <h3>${service.title}</h3>
                        <p>${service.shortDesc}</p>
                        <span class="service-tag">${service.tag}</span>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        function openModal(service) {
            const modal = document.getElementById('modal');
            const overlay = document.getElementById('modalOverlay');
            const title = document.getElementById('modalTitle');
            const subtitle = document.getElementById('modalSubtitle');
            const image = document.getElementById('modalImage');
            const content = document.getElementById('modalContent');

            title.textContent = service.title;
            subtitle.textContent = service.subtitle;
            image.style.background = service.image;
            
            const featuresList = service.features.map(f => `<li>${f}</li>`).join('');
            
            content.innerHTML = `
                <p>${service.description}</p>
                <h3 style="color: #d4af37; font-size: 1.2rem; font-weight: 400; margin-bottom: 1rem;">What's Included:</h3>
                <ul class="features-list">
                    ${featuresList}
                </ul>
                <div class="price-section">
                    <h4>Investment</h4>
                    <p>${service.pricing}</p>
                </div>
            `;

            modal.classList.add('active');
            overlay.classList.add('active');
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            const overlay = document.getElementById('modalOverlay');
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }

        document.getElementById('closeBtn').addEventListener('click', closeModal);
        document.getElementById('modalOverlay').addEventListener('click', closeModal);

        renderServices();