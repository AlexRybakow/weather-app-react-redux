import { connect } from 'react-redux';
import CityList from '../../components/CityList/CityList';

interface CitiesProps {
  cities: string[];
}

const mapStateToProps = ({ cities }: CitiesProps) => ({
  cities,
});

export default connect(mapStateToProps)(CityList);
