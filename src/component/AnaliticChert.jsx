import { Cell,  Pie, PieChart, Tooltip, Legend,} from 'recharts';
import { useFriends } from '../context/dataContext';

const COLORS = ['#21c3de', '#e81782', '#8884d8'];
const LABELS = ['Call', 'Text', 'Video'];

const AnaliticChert = () => {
  const { item } = useFriends();

  const data = [
    { name: 'Call', value: item.filter(i => i.click === 'call').length },
    { name: 'Text', value: item.filter(i => i.click === 'text').length },
    { name: 'Video', value: item.filter(i => i.click === 'video').length },
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-center md:text-left w-125'>By Interaction Type</h1>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          innerRadius="60%"
          outerRadius="80%"
          cornerRadius={5}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} /> 
          ))}
        </Pie>
        <Tooltip />  
        <Legend />    
      </PieChart>
    </div>
  );
};

export default AnaliticChert;