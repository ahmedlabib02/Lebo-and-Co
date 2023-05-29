import BlindBillCard from './BlindBillCard';

function BlindBills(){
    // const [index,setIndex]= useState()
    const bills = [
        {
          id: 1,
          name: 'Electricity Bill',
          amount: 150.0,
          type: 'electricty',
          dueDate: 'May 15, 2023',
        },
        {
          id: 2,
          name: 'Internet Bill',
          type: 'water',
          amount: 50.0,
          dueDate: 'May 20, 2023',
        },
        {
          id: 3,
          name: 'Phone Bill',
          amount: 30.0,
          type: 'gas',
          dueDate: 'May 25, 2023',
        },
      ];  


    return  (
        <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
          
          <div className="flex ">
          {bills.map((bill) => (
            
            <div className='mr-12'>
              <BlindBillCard bill={bill} />
              </div>
            ))}
            
          </div>
            
        </div>
      );

}
export default BlindBills;