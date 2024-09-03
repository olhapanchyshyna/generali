import Calculator from '@/components/calculator'
import CompanyShareholders from '@/components/companys-shareholders'
import CustomerSlider from '@/components/customer-slider'
import FirstScreen from '@/components/first-screen'
import Profit from '@/components/profit'
import Purpose from '@/components/purpose'
import Serving from '@/components/serving'

export default function Home() {
	return (
		<main>
			<FirstScreen />
			<Purpose/>
			<Serving/>
			<Profit/>
			<CustomerSlider/>
			<CompanyShareholders/>
		</main>
	)
}
