import { connect } from 'react-redux';
import CityCardDetails from '../../components/CityCardDetails';

type CityType = {
  city: string;
  temp: number;
  icon: string;
  humidity: number;
  pressure: number;
  wind: number;
};

interface CityProps {
  city: CityType;
  loading: boolean;
}

const mapStateToProps = ({ loading, city }: CityProps) => ({
  city: city,
  loading,
});

export default connect(mapStateToProps)(CityCardDetails);
