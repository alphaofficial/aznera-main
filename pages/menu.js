import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';
import Layout from '../components/layout';

function Menu () {

    return (
        <Layout page="menu">
            <section class="section" style={{backgroundColor: 'white'}}>
                <div class="container">
                    <div className="row" style={{marginTop: '5em'}}>
                        <div className="col-md-12 text-center" style={{ marginBottom: '2em', marginTop: '2em'}}>
                            <h1 class="fw-500">Menu</h1>
                            <div style={{width: '100%'}}>
                                <p>Experience Our Palatable Culture</p>
                            </div>
                        
                        </div>

                        <div className="col-md-12">
                            <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'left', fontFamily: 'Belligan'}}><span style={{color: '#4C1A16'}}>Azmera</span> <span style={{color: '#FF6B05',textDecoration: 'underline', textDecorationThickness: '10%', textDecorationColor: '#4C1A16'}}>Specials</span></p> 
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu01.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>TZ and Ayoyo Soup</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Served with beef and intestine stew)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu02.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Aboloo With UN Fish</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Served with baby tilapia, shrimps & keta schoolboys, served with hot pepper)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu03.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Fufu and Abunuabunu</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Plantain or cocoyam mixed with cassava fufu served with green (kontonmire) soup with dryfish, snail, grasscutter, mushrooms, sliced okro and garden eggs)</p>
                        </div>


                    </div>
                    <div className="row" style={{marginTop: '3em'}}>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu04.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Gari Fotor</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Gari mixed in tomato stew, served with beans, sardines, fried plantain and avocados)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu05.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Fufu and United Nations Soup</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Assorted meat and fish)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu06.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Azmera Waakye</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Rice and beans served with fish, eggs, beef, gari, spaghetti and wele, black pepper and tomato stew)</p>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: '3em'}}>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu07.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Azmera Ghana Jollof</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Jollof rice served with grilled or fried chicken or fried fish/grilled tilapia with a side of shito and black pepper)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu08.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Red Red</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Fried ripe plantains with beans stew served with gari and fish or chicken)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu09.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Banku and Tilapia</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Corn or Millet banku served with spicy, grilled tilapia, vegetables and avocados)</p>
                        </div>
                    </div>


                    <div className="row" style={{marginTop: '3em'}}>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu10.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Banku and Okro Stew</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Corn or Millet banku served with okro stew, crabs, tuna, salmon, wele and salted beef)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu11.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Ampesi and Asanka Kontomire</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Boiled yam, plantain, ripe plantain and cocoyam served with mashed kontomire, koobi, boiled eggs, palm oil and sliced avocado)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu12.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Tatale and Aboboi</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Ripe plantain pancakes served with bambara beans, brown sugar or white sugar)</p>
                        </div>
                    </div>


                    <div className="row" style={{marginTop: '3em'}}>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu13.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Etor</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Mashed plantain or Yam, served with salted fish, eggs, avocado, roasted peanuts and palm oil)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu14.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Apapransa</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Roasted corn powder cooked with palmnut soup served with red beans, crabs and dry fish)</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu15.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Mpotompotor</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Cocoyam cooked in palmnut sauce, served with salted beef, dry fish and crabs)</p>
                        </div>
                    </div>
                    

                    <div className="row" style={{marginTop: '3em'}}>
                        <div className="col-md-4 mx-auto text-center">
                            <div style={{height: '450px', width: '100%', background: 'transparent url(/assets/menu/menu16.png) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            </div>
                            <p style={{color: '#FF6B05', textAlign: 'center', fontSize: '20px', marginTop: '1em'}}>Azmera Fried Yam Sweet Potato</p>
                            <p style={{color: '#4C1A16', textAlign:'center', fontSize: '12px', }}>(Fried Yam/Sweet Potatoes, served with sardines, fried fish, grilled tilapia or grilled chicken with red pepper, green pepper and shito)</p>
                        </div>
                    </div>




                    <div className="row" style={{marginTop: '5em'}}>
                        <div className="col-md-12">
                            <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'left', fontFamily: 'Belligan'}}><span style={{color: '#FF6B05'}}>Family platter</span> <span style={{color: '#4C1A16',textDecoration: 'underline', textDecorationThickness: '10%', textDecorationColor: '#4C1A16'}}>Packages</span></p> 
                        </div>

                        <div className="col-md-12" style={{marginBottom: '5em'}}>
                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <table style={{border: 'none', margin: '0 auto'}}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th><div style={{border: '2px solid #FF6B05', borderRadius: '22px', textAlign:'center', fontSize: '14px', padding: '.5em', margin: '.5em 1em'}}>50 to 99<br/> people</div></th>
                                                
                                                <th><div style={{border: '2px solid #FF6B05', borderRadius: '22px', textAlign:'center', fontSize: '14px', padding: '.5em', margin: '.5em 1em'}}>100 to 199<br/> people</div></th>
                                                
                                                <th><div style={{border: '2px solid #FF6B05', borderRadius: '22px', textAlign:'center', fontSize: '14px', padding: '.5em', margin: '.5em 1em'}}>200 to 299<br/> people</div></th>

                                                <th><div style={{border: '2px solid #FF6B05', borderRadius: '22px', textAlign:'center', fontSize: '14px', padding: '.5em', margin: '.5em 1em'}}>300 plus<br/> people</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{margin: '2em 0'}}>
                                                <td style={{textAlign: 'center', margin: '0 auto'}}><div style={{background: '#FF6B05 0% 0% no-repeat padding-box', borderRadius: '50%', padding: '1em', color: 'white', fontFamily: 'Belligan', width: '100px', height: '100px', textAlign: 'center'}}>Package One</div></td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC70</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC65</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC60</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC55</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>
                                            </tr>


                                            <tr style={{margin: '2em 0'}}>
                                                <td style={{textAlign: 'center', margin: '0 auto'}}><div style={{background: '#FF6B05 0% 0% no-repeat padding-box', borderRadius: '50%', padding: '1em', color: 'white', fontFamily: 'Belligan', width: '100px', height: '100px', textAlign: 'center'}}>Package Two</div></td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC110</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC105</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC100</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC135</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>
                                            </tr>

                                            <tr style={{margin: '2em 0'}}>
                                                <td style={{textAlign: 'center', margin: '0 auto'}}><div style={{background: '#FF6B05 0% 0% no-repeat padding-box', borderRadius: '50%', padding: '1em', color: 'white', fontFamily: 'Belligan', width: '100px', height: '100px', textAlign: 'center'}}>Package Three</div></td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC140</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC135</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC130</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC125</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>
                                            </tr>

                                            <tr style={{margin: '2em 0'}}>
                                                <td style={{textAlign: 'center', margin: '0 auto'}}><div style={{background: '#FF6B05 0% 0% no-repeat padding-box', borderRadius: '50%', padding: '1em', color: 'white', fontFamily: 'Belligan', width: '100px', height: '100px', textAlign: 'center'}}>Package Three</div></td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC160</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC155</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC150</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>

                                                <td style={{textAlign: 'center', margin: '0 auto'}}>
                                                    <p style={{fontSize: '20px', marginBottom: '0'}}>GHC145</p>
                                                    <p style={{marginTop: '0'}}>per head</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Stews</p>
                            <p><span style={{color: '#FF6B05'}}>Abobi Tadzi</span><br/> <span>(Dry Anchovies (Keta School Boys)</span></p>
                            <p><span style={{color: '#FF6B05'}}>Asanka Garden Eggs</span> <br /> <span>(Eggs, Avocado, Sardines or Koobi)</span></p>
                            <p><span style={{color: '#FF6B05'}}>Asanka Hot Pepper</span> <br /><span>(Eggs, Sardines or Koobi or Corned Beef or United NationsFish With Avocado)</span></p>
                            <p><span style={{color: '#FF6B05'}}>Asanka Kontomire </span> <br /> <span>(Koobi, Eggs, Avocado)</span></p>
                            <p><span style={{color: '#FF6B05'}}>Beans Stew </span> <br /> <span> (Chicken, Beef or Fish)</span></p>
                        </div>


                        <div className="col-md-5">
                            <p style={{color: '#FF6B05', fontSize: '40px'}}>Soups</p>
                            <p style={{color: '#FF6B05', fontSize: '14px', textDecoration: 'underline'}}>Soups are served with a side of choice</p>
                            <div className="row">
                                <div className="col-md-6">      
                                    <p><span style={{color: '#FF6B05'}}>Ademe Soup</span><br/> <span>(Dryfish, Crab, Beef)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Groundnut Soup</span> <br /> <span>(Chicken or Beef)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Palm Nut Soup</span> <br /><span>(Beef and Dry Fish)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>United Nations Soup</span> <br /> <span>(Assorted meat and fish)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Okro Soup</span> <br /> <span> (Salted Beef, Salmon, Tuna, Crab, Wele)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Fresh Tilapia Light Soup</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Goat Light Soup</span></p>
                                </div>

                                <div className="col-md-6">         
                                    <p><span style={{color: '#FF6B05'}}>Dry Fish Light Soup</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Grasscutter Light Soup</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Azmera Light Soup</span> <br /> <span>(Dryfish, Crab, Salted Beef, Mushroom,Dry Snails, sliced okro, sliced garden eggs)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Green Soup (Abunuabunu)</span> <br /><span>(Grass Cutter, Dryfish, mushroom, snails, crab) </span></p>
                                    <p><span style={{color: '#FF6B05'}}>Ayoyo Soup</span> <br /> <span>(Served with beef and intestines)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Village Christmas Soup</span> <br /> <span> (Chicken feet, Chicken neck, Chicken back, Chicken wings)</span></p>
                                    <p><span style={{color: '#FF6B05'}}>Melon Seed Soup/Wr3wr3 Soups</span> <br /> <span>(Grasscutter or Dryfish or Chicken) </span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Sides</p>
                            <div className="row">
                                <div className="col-md-6">       
                                   <p>Plain Rice</p>
                                   <p>Jollof Rice</p>
                                   <p>Kokonte</p>
                                   <p> Tatale </p>
                                   <p>Tuo Zaafi</p>
                                   <p>Ewo Kple </p>
                                   <p>Ga Kenkey</p>
                                   <p>Fante Kenkey </p>
                                   <p>Kelewele</p>
                                   <p>Fried Plantain</p>
                                   <p>Abolo </p>
                                   <p>Akyeke </p>
                                   <p>Corn Banku </p>
                                   <p>Millet Banku </p>
                                   <p> Kaaklo </p>
                                </div>

                                <div className="col-md-6">        
                                   <p>Fufu <br /> <span style={{fontSize: '12px'}}>(Plantain or Cocoyam)</span></p>
                                   <p>Fried Yam</p>
                                   <p>Fried Sweet Potato</p>
                                   <p>  Ampesi <br /> <span style={{fontSize: '12px'}}>(Yam, Plantain, Ripe Plantain, Cocoyam)</span> </p>
                                   <p>Etor <br /> <span style={{fontSize: '12px'}}>(Yam or Plantain)</span></p>
                                   <p>Omotuo <br /> <span style={{fontSize: '12px'}}>(Rice Balls)</span>  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12" style={{marginBottom: '3em'}}>

                        </div>
                        <div className="col-md-3">
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Khebabs</p>
                            <p>Beef </p>
                            <p>Goat</p>
                            <p>Gizzard</p>
                            <p>Chicken </p>
                            <p>Pork </p>
                        </div>

                        <div className="col-md-3">
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Desert</p>
                            <p>Nkate Cake </p>
                            <p>Fresh Fruit</p>
                            <p>Atadwe Milk (Tiger Nut Pudding)</p>
                            <p>Pan Cake </p>
                        </div>


                        <div className="col-md-3">      
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Grills</p>
                            <p>Tilapia </p>
                            <p>Chicken</p>
                            <p>Guinea Fowl</p>
                            <p>Grilled Pork </p>
                            <p>Goat Khebab </p>
                            <p>Chicken Khebab </p>
                            <p>Gizzard Khebab  </p>
                            <p> Beef Khebab  </p>
                            <p> Pork Khebab  </p>
                        </div>

                        <div className="col-md-3">
                            <p style={{color: '#FF6B05', fontSize: '40px', marginBottom: '1.2em'}}>Local Drinks</p>
                            <p>Palm Wine </p>
                            <p> Asaana</p>
                            <p> Lamugin</p>
                            <p> Bissap </p>
                        </div>


                    </div>




                    <div class="icon-bar">
                            <a class="socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="socials"  href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="socials"  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

  
export default Menu