import React from 'react';

// styled components
import { Container } from './dashboard.styles';

import AdminLayout from 'components/global/layout/admin-layout.component';
import { SmallCard } from 'components/global/card/card.component';

const DashboardPage = () => {
	return (
		<AdminLayout title='Dashboard'>
			<Container>
				<div class='main-overview'>
					<SmallCard title='Total Number (Restaurant)' number='50' color='orange' />
					<SmallCard title='Total Number (Restaurant)' number='50' color='#9CA3AC' />
					<SmallCard title='Total Number (Restaurant)' number='50' color='#C95609' />
					<SmallCard title='Total Number (Restaurant)' number='50' color= '#727092' />
				</div>

				<div class='main-cards'>
					<div class='card'>Card</div>
					<div class='card'>Card</div>
					<div class='card'>Card</div>
				</div>
			</Container>
		</AdminLayout>
	);
};

export default DashboardPage;
