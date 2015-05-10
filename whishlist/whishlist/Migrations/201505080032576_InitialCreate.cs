namespace whishlist.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.WhishListItems",
                c => new
                    {
                        WhishListItemId = c.Int(nullable: false, identity: true),
                        UserId = c.String(),
                        VenueId = c.String(),
                        VenuePictureUrl = c.String(),
                        UserPictureUrl = c.String(),
                        VenueName = c.String(),
                    })
                .PrimaryKey(t => t.WhishListItemId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.WhishListItems");
        }
    }
}
