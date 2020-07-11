import React from 'react';

// styled components
import { Container } from './dashboard.styles';

import AdminLayout from 'components/global/layout/admin-layout.component';
import { CardSmContainer } from 'components/global/card/card.styles';

const DashboardPage = () => {
	return (
		<AdminLayout title='Dashboard'>
			<Container>
				<div class='main-overview'>
					<CardSmContainer title='Total Number (Restaurant)' number='50' />
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
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
