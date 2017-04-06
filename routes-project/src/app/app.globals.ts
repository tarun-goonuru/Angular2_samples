export class Globals {

//----------------------------------------------------------------------------------------------
// Static (Singleton Implementation) Properties Section:
//----------------------------------------------------------------------------------------------
static instance         : Globals;
static isCreating       : Boolean = false;

//----------------------------------------------------------------------------------------------
// Private Properties Section:
//----------------------------------------------------------------------------------------------
private Data = {
            "test":{}
        };

//----------------------------------------------------------------------------------------------
// Constructor Method Section:
//----------------------------------------------------------------------------------------------
constructor()
{
    if (!Globals.isCreating)
    {
        throw new Error("No se puede llamar a esta clase con 'new' - Utiliza getInstance()");
    }
}


//----------------------------------------------------------------------------------------------
// (Singleton Implementation) getInstance() Method:
//----------------------------------------------------------------------------------------------
static getInstance() : Globals
{
    if (Globals.instance == null)
    {
        Globals.isCreating = true;
        Globals.instance = new Globals();
        Globals.isCreating = false;
    }

    return Globals.instance;
}


//----------------------------------------------------------------------------------------------
// Properties Section (Set and Get):
//----------------------------------------------------------------------------------------------
getData() : any
{
    return this.Data.test;
}
//----------------------------------------------------------------------------------------------
setData(val) : any
{
    this.Data.test = val;
}
}