using System;

namespace ReactOnboarding.Model
{
    public class Sale
    {
        public int ID { get; set; }
    
        public DateTime? DateSold { get; set; }
        
        //Foreign keys
        public int ProductID { get; set; }
        public int CustomerID { get; set; }
        public int StoreID { get; set; }
        
        //Nav Properties
        public Customer Customer { get; set; }
        public Product Product { get; set; }
        public Store Store { get; set; }

    }
}
