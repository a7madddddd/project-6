//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class cart_item
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public int quantity { get; set; }
        public int cart_id { get; set; }
    
        public virtual cart cart { get; set; }
        public virtual product product { get; set; }
    }
}
