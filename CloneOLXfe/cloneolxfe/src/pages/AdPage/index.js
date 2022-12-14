import React,
 {
      useState,
       useEffect
     } from 'react';

import
 {  PageArea,
    Fake
} from './styled';
import { useParams } from 'react-router-dom';
import { 
    PageContainer
   } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';

const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const  [adInfo,setAdInfo] = useState({});
    
    useEffect(()=> {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);

    return (
        <PageContainer>
            <PageArea>
              <div className="leftSide">
                    <div className="box">
                        
                        <div className="idImage">
                            {loading &&
                            <Fake height={300} />

                            }
                                {adInfo.images && 
                                <Slide>
                                    {adInfo.images.map((img, k) => 
                                       
                                        <div key={k} className="each-slide">
                                            <img src={img} alt="" />
                                        </div>
                                   
                                    )}
                                </Slide>
                            }
                        </div>

                        <div className="adInfo">
                           
                            <div className="adName">
                                {loading &&
                                <Fake height={20} />

                                }
                            </div>


                            <div className="adDiscription">
                                {loading &&
                                    <Fake height={100} />

                                    }
                            </div>

                        </div>
                    </div>
              </div>
              <div className="rightSide">
                    <div className="box box--padding">
                        {loading && 
                            <Fake height={20} />
                        }

                    </div>

                    <div className="box box--padding">
                        {loading && 
                            <Fake height={50} />
                        }
                    
                    </div>

              </div>
            </PageArea>
        </PageContainer>
    )
}

export default Page;