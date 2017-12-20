import React, {Component} from 'react'
import './UserInfo.css'
import GoBack from '../GoBack/GoBack'
import Other from './Other/Other'

class UserInfo extends Component {
  render() {
    return (
      <div className='index_header__UserInfo'>
        <header className='UserInfo__header'>
          <GoBack/>
          <span className='UserInfo__title'>登录推荐更精准</span>
        </header>
        <div className='UserInfo__login'>
          <div className='login__main'>
            <ul className='login__list'>
              <li className='login__item'>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3558"><defs><style type="text/css"></style></defs><path d="M833.1 64v895.9H192V64h641.1m34-64H158c-16.6 0-30 13.4-30 30v963.9c0 16.6 13.4 30 30 30h709.1c16.6 0 30-13.4 30-30V30c0-16.6-13.4-30-30-30z" fill="#FE7171" p-id="3559"></path><path d="M733.9 162.2v541.6H294.2V162.2h439.7m34-64H260.2c-16.6 0-30 13.4-30 30v609.6c0 16.6 13.4 30 30 30H768c16.6 0 30-13.4 30-30V128.2c-0.1-16.5-13.5-30-30.1-30zM513 832.8c17 0 30.9 13.9 30.9 30.9S530 894.6 513 894.6s-30.9-13.9-30.9-30.9c0-17.1 13.9-30.9 30.9-30.9m0-33c-35.3 0-63.9 28.6-63.9 63.9s28.6 63.9 63.9 63.9 63.9-28.6 63.9-63.9-28.6-63.9-63.9-63.9z" fill="#FE7171" p-id="3560"></path></svg>
              </li>
              <li className='login__item'>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5896"><defs><style type="text/css"></style></defs><path d="M505.100496 933.754956c0 49.769286-72.758538 90.122761-162.514449 90.122761s-162.392166-40.353475-162.392167-90.122761S252.952419 843.754478 342.70833 843.754478s162.514449 40.353475 162.514449 90.122761zM680.576971 843.754478c-89.755911 0-162.514449 40.353475-162.51445 90.122761s72.758538 90.122761 162.51445 90.122761 162.514449-40.353475 162.514449-90.122761S770.210599 843.754478 680.576971 843.754478z" fill="#FFC716" p-id="5897"></path><path d="M870.84972 501.361357s-12.228326-12.228326-25.434918-24.456652V333.466444a333.466444 333.466444 0 1 0-666.932887 0V476.904705C165.15304 489.133031 152.924714 501.361357 152.924714 501.361357c-21.644137 33.01648-73.369955 117.269644-73.369955 196.876044s21.76642 93.179842 29.959398 93.791259S145.098585 785.058514 178.359632 733.699546c45.122522 149.919274 177.18844 258.506807 333.221877 258.506807S800.169997 883.61882 845.047953 733.699546c33.505613 51.603535 61.753045 59.30738 69.334607 58.573681s29.959398-14.307141 29.959398-93.791259-51.725818-163.859565-73.369955-196.509195z" fill="#37464F" p-id="5898"></path><path d="M266.648144 558.834488a429.336518 429.336518 0 0 0-3.668498 58.451397c0 182.079771 113.478863 330.164796 253.37091 330.164796s253.37091-147.595892 253.37091-330.164796a429.336518 429.336518 0 0 0-3.913064-58.451397z m157.623119-405.858133c-36.684977 0-67.255792 40.842608-67.255792 91.223311s30.081681 91.22331 67.255792 91.22331 67.255792-40.842608 67.255792-91.22331-30.081681-91.22331-67.255792-91.223311zM435.399039 281.251493c-13.573442 0-24.456652-16.752806-24.456651-37.418677s11.005493-37.418677 24.456651-37.418677 24.456652 16.752806 24.456652 37.418677-11.005493 37.418677-24.456652 37.418677z m166.305231-128.275138c-36.684977 0-67.255792 40.842608-67.255792 91.223311s30.081681 91.22331 67.255792 91.22331 67.255792-40.842608 67.255791-91.22331-30.081681-91.22331-67.255791-91.223311z m11.372343 94.647242a1.834249 1.834249 0 0 1-1.834249 1.834249 1.711966 1.711966 0 0 1-1.711966-1.345116 24.456652 24.456652 0 0 0-20.66587-17.853356A24.456652 24.456652 0 0 0 568.68779 248.357296a1.711966 1.711966 0 0 1-1.589682 1.10055 1.834249 1.834249 0 0 1-1.834249-1.834249V244.566515c0-20.665871 11.005493-37.418677 24.456651-37.418676s24.456652 16.752806 24.456652 37.418676v3.179365z" fill="#FFFFFF" p-id="5899"></path><path d="M247.938805 540.491999c-6.114163 30.570814-19.076188 167.894913-12.962025 198.465727s31.793647 25.434918 68.723191 25.801768 77.527585 10.14951 78.139001-34.728446 0.7337-133.288751 10.88321-165.93838-144.783377-23.600669-144.783377-23.600669z" fill="#FF3A2F" p-id="5900"></path><path d="M239.86811 606.035825l143.560545 46.467638a416.863626 416.863626 0 0 1 9.415811-88.166229c10.14951-32.64963-144.783377-23.845235-144.783378-23.845235-2.201099 11.127776-5.380463 36.684977-8.192978 65.543826z" fill="#DD2C00" p-id="5901"></path><path d="M512.559775 462.230714c111.889181 0 202.867925-40.720325 202.867924-65.910676 0-19.076188-90.734177-38.763793-202.623358-38.763792s-202.623358 17.731072-202.623358 38.763792c0 23.845235 90.734177 65.910676 202.623358 65.910676z" fill="#FFC716" p-id="5902"></path><path d="M514.63859 486.809649s128.519704 1.345116 231.115357-42.187724 101.617387-48.913303 112.867447-48.913303 24.456652 16.14139 30.081682 45.244805 12.228326 52.092668-12.228326 66.399809-180.979221 106.508717-357.923096 106.508718h-8.804394c-176.943874 0-333.955577-92.32386-357.923095-106.508718s-17.364223-36.684977-12.228326-66.399809 18.831622-45.244805 30.081681-45.244805 10.14951 4.89133 112.867447 48.913303 231.115357 42.187724 231.115357 42.187724z" fill="#FF3A2F" p-id="5903"></path></svg>
              </li>
              <li className='login__item'>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11201" ><defs><style type="text/css"></style></defs><path d="M382.171429 704c-9.142857 0-16.457143 7.314286-18.285715 16.457143-1.828571 9.142857 5.485714 16.457143 12.8 16.457143 9.142857 0 16.457143-7.314286 18.285715-16.457143 1.828571-9.142857-3.657143-16.457143-12.8-16.457143z m-58.514286 10.971429c-27.428571 1.828571-51.2 23.771429-54.857143 51.2-3.657143 27.428571 14.628571 51.2 42.057143 49.371428 27.428571 0 53.028571-23.771429 54.857143-53.028571 3.657143-27.428571-14.628571-49.371429-42.057143-47.542857z" fill="#FFFFFF" p-id="11202"></path><path d="M766.171429 680.228571c-12.8-126.171429-182.857143-213.942857-382.171429-193.828571-201.142857 18.285714-352.914286 135.314286-340.114286 261.485714 12.8 126.171429 182.857143 213.942857 382.171429 193.828572 199.314286-18.285714 351.085714-135.314286 340.114286-261.485715z m-250.514286 49.371429c-9.142857 82.285714-89.6 149.942857-175.542857 149.942857-84.114286 0-138.971429-64-128-140.8 10.971429-74.971429 84.114286-138.971429 166.4-144.457143 82.285714-5.485714 144.457143 54.857143 137.142857 135.314286z" fill="#FFFFFF" p-id="11203"></path><path d="M1020.342857 323.657143C987.428571 137.142857 837.485714 62.171429 735.085714 54.857143c-20.114286-1.828571-38.4 9.142857-40.228571 29.257143-1.828571 18.285714 10.971429 36.571429 29.257143 40.228571 65.828571 14.628571 193.828571 34.742857 228.571428 223.085714 3.657143 18.285714 18.285714 40.228571 43.885715 34.742858 16.457143-3.657143 32.914286-14.628571 23.771428-58.514286z m-299.885714-51.2c-12.8-1.828571-23.771429 5.485714-27.428572 16.457143-3.657143 12.8 3.657143 27.428571 16.457143 31.085714 29.257143 5.485714 42.057143 25.6 45.714286 45.714286 0 0 3.657143 14.628571 16.457143 18.285714 12.8 3.657143 36.571429-5.485714 31.085714-31.085714-7.314286-36.571429-42.057143-74.971429-82.285714-80.457143z" fill="#E79014" p-id="11204"></path><path d="M736.914286 171.885714c-29.257143-5.485714-43.885714 16.457143-43.885715 32.914286s12.8 29.257143 34.742858 34.742857c60.342857 16.457143 96.914286 42.057143 107.885714 109.714286 3.657143 20.114286 21.942857 31.085714 34.742857 31.085714 18.285714 0 32.914286-14.628571 32.914286-32.914286v-1.828571c-10.971429-85.942857-76.8-159.085714-166.4-173.714286z" fill="#E79014" p-id="11205"></path><path d="M731.428571 704c-12.8 122.514286-188.342857 221.257143-380.342857 215.771429C173.714286 916.114286 54.857143 822.857143 74.971429 714.971429c18.285714-104.228571 164.571429-193.828571 334.628571-204.8 182.857143-10.971429 332.8 74.971429 321.828571 193.828571z m-29.257142-197.485714c-7.314286 0-10.971429 1.828571-10.971429-1.828572 0-1.828571 0-3.657143 3.657143-14.628571 10.971429-27.428571 27.428571-80.457143-7.314286-111.542857-23.771429-20.114286-120.685714-34.742857-223.085714 34.742857-5.485714 3.657143-12.8 10.971429-18.285714 9.142857-5.485714-1.828571-5.485714-7.314286-5.485715-16.457143-1.828571-47.542857 40.228571-186.514286-69.485714-175.542857-117.028571 20.114286-274.285714 201.142857-318.171429 290.742857C-106.057143 833.828571 124.342857 961.828571 349.257143 969.142857c245.028571 7.314286 493.714286-129.828571 524.8-314.514286 23.771429-124.342857-122.514286-148.114286-171.885714-148.114285z" fill="#D62629" p-id="11206"></path><path d="M376.685714 592.457143c-80.457143 3.657143-153.6 67.657143-166.4 144.457143-10.971429 76.8 43.885714 140.8 128 140.8 85.942857 0 166.4-67.657143 175.542857-149.942857 9.142857-78.628571-53.028571-138.971429-137.142857-135.314286z m-10.971428 171.885714c-3.657143 29.257143-29.257143 51.2-54.857143 53.028572-27.428571 0-45.714286-21.942857-42.057143-49.371429 3.657143-27.428571 27.428571-51.2 54.857143-51.2 27.428571-3.657143 45.714286 18.285714 42.057143 47.542857z m12.8-27.428571c-9.142857 0-14.628571-7.314286-12.8-16.457143 1.828571-9.142857 9.142857-16.457143 18.285714-16.457143s14.628571 7.314286 14.628571 16.457143c-3.657143 9.142857-10.971429 16.457143-20.114285 16.457143z" fill="#030000" p-id="11207"></path></svg>
              </li>
            </ul>
            <div className='login__arrow'>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12195"><defs><style type="text/css"></style></defs><path d="M647.763 490.982c12.499-12.499 32.755-12.499 45.253 0v0c12.499 12.499 12.499 32.755 0 45.253l-316.781 316.781c-12.499 12.499-32.755 12.499-45.253 0v0c-12.499-12.499-12.499-32.755 0-45.253l316.781-316.781z" p-id="12196" fill="#e6e6e6"></path><path d="M330.982 216.237c-12.499-12.499-12.499-32.755 0-45.253v0c12.499-12.499 32.755-12.499 45.253 0l316.781 316.781c12.499 12.499 12.499 32.755 0 45.253v0c-12.499 12.499-32.755 12.499-45.253 0l-316.781-316.781z" p-id="12197" fill="#e6e6e6"></path></svg>
            </div>
          </div>
          <div className='login__readtime'>
            <span className='icon'>
              <svg viewBox="0 0 1024 1024" version="1.1" ><defs><style type="text/css"></style></defs><path d="M182.06515711545944 728.3206432014704c-8.873669430613518 0-16.090739518404007-7.221143692731857-16.090739518404007-16.09481312334537V266.306628368795c0-6.730953231453896 4.243338480591774-12.804698199033737 10.560141876339912-15.11511113494635 12.154958210885521-4.447018727660179 77.36590504646301-26.628476567566388 167.57181286811831-26.628476567566388 57.73656070232393 0 114.57081791013479 8.938168175518513 168.92424970865247 26.56533569097519a16.05475600808859 16.05475600808859 0 0 1 11.12773083150387 15.315396711230278V708.802644059062c0 8.877064101397991-7.2143543511629105 16.098886728286743-16.08259230852127 16.099565662443638-1.1908505111932755 0-2.3857746273279186-0.13307109475135803-3.5508256405591965-0.3958186134696006-19.932148978114128-4.496580921113491-91.20937250554562-19.16699018329382-171.4634634554386-19.16699018329382-56.91708717495203 0-105.84244038909674 7.396308705210686-145.41683346033093 21.983888000249866a16.104318201541897 16.104318201541897 0 0 1-5.580159835517406 0.9973542764782906z m8.225287310779095-456.17789682000875V700.6758022010326c40.13179801404476-13.045040890574453 88.09034898877142-19.653107039630413 142.7696691825986-19.653107039630413 72.48233165591955 0 137.8507912158966 11.599590070545675 166.78153350949287 17.596615478396412V272.45166142284864c-50.2017494291067-15.644679777324196-102.56115160882474-23.571236059069637-155.73595371097326-23.571236059069637-76.85534656047821 0-134.21441987156865 16.690238378942013-153.8152489811182 23.26299995183945z" fill="#ffffff" p-id="14194"></path><path d="M516.810248501599 728.3206432014704c-8.872311562299727 0-16.090739518404007-7.221143692731857-16.090739518404007-16.09481312334537V266.306628368795c0-6.73163216561079 4.244696348905563-12.806735001504421 10.562178678810598-15.11511113494635 12.154279276728632-4.44566085934639 77.36454717814922-26.628476567566388 167.56977606564757-26.628476567566388 57.73723963648081 0 114.5701389759779 8.938168175518513 168.92424970865247 26.56533569097519a16.05475600808859 16.05475600808859 0 0 1 11.129088699817657 15.315396711230278V708.802644059062c0 8.877064101397991-7.215033285319805 16.098886728286743-16.08259230852127 16.099565662443638-1.1908505111932755 0-2.3857746273279186-0.13307109475135803-3.5508256405591965-0.39649754762649536-19.933506846427917-4.495901986956596-91.21073037385939-19.166311249136925-171.4648213237524-19.166311249136925-56.917766109108925 0-105.8431193232536 7.396308705210686-145.41683346033093 21.983888000249866a16.079876571893692 16.079876571893692 0 0 1-5.579480901360512 0.9973542764782906z m8.225966244935991-456.17789682000875V700.6758022010326c40.133834816515446-13.04571982473135 88.09034898877142-19.653107039630413 142.77034811675549-19.653107039630413 72.48097378760576 0 137.84943334758282 11.599590070545675 166.78153350949287 17.596615478396412V272.45166142284864c-50.20310729742051-15.644679777324196-102.56115160882474-23.571914993226528-155.73595371097326-23.571914993226528-76.8560254946351 0-134.21509880572557 16.690917313098907-153.81592791527513 23.26367888599634zM242.83859030157328 368.1725514009595l-0.006789341568946838-0.02308376133441925c-1.7699813470244408-6.719411350786688 2.4380525574088097-13.548810034990307 9.235541336238382-14.994260855019096 12.321976013481617-2.6193279772996907 32.92287513613701-6.422717124223709 57.90900997817515-8.798986673355103 48.75426180660725-4.635762423276901 91.58685989677906-1.9037313759326935 127.56222300231457 8.11733677983284 6.7526791244745255 1.8806476145982742 10.556068271398544 9.023713879287245 8.292501792311668 15.657579526305199-2.072107046842575 6.075102835893631-8.5185868665576 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.419483676552773-145.1472966000438-5.043801851570606-174.01082441210747 1.0353745892643929-6.345997564494609 1.3361424207687378-12.626817449927326-2.527671866118908-14.278664253652092-8.798986673355103zM242.83859030157328 467.3784104064107l-0.006789341568946838-0.02308376133441925c-1.7699813470244408-6.719411350786688 2.4380525574088097-13.548810034990307 9.235541336238382-14.994260855019096 12.321976013481617-2.620006911456585 32.92287513613701-6.422717124223709 57.90900997817515-8.798986673355103 48.75426180660725-4.635762423276901 91.58685989677906-1.9037313759326935 127.56222300231457 8.116657845675945 6.7526791244745255 1.8806476145982742 10.556068271398544 9.024392813444138 8.292501792311668 15.658258460462093-2.072107046842575 6.075102835893631-8.5185868665576 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.419483676552773-145.1472966000438-5.043801851570606-174.01082441210747 1.0353745892643929-6.345997564494609 1.3375002890825272-12.626817449927326-2.527671866118908-14.278664253652092-8.798986673355103zM242.83859030157328 559.0813680440187l-0.006789341568946838-0.022404827177524567c-1.7699813470244408-6.720090284943581 2.4380525574088097-13.549488969147209 9.235541336238382-14.994260855019096 12.321976013481617-2.6206858456134796 32.92287513613701-6.422717124223709 57.90900997817515-8.798986673355103 48.75426180660725-4.637120291590691 91.58685989677906-1.9037313759326935 127.56222300231457 8.116657845675945 6.7526791244745255 1.8806476145982742 10.556068271398544 9.023713879287245 8.292501792311668 15.657579526305199-2.072107046842575 6.075102835893631-8.5185868665576 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.418804742395878-145.1472966000438-5.0431229174137115-174.01082441210747 1.0360535234212875-6.345997564494609 1.3361424207687378-12.626817449927326-2.5283508002758026-14.278664253652092-8.800344541668894z" fill="#ffffff" p-id="14195"></path><path d="M578.194043494761 368.1725514009595l-0.006789341568946838-0.02308376133441925c-1.7699813470244408-6.719411350786688 2.4380525574088097-13.548810034990307 9.235541336238382-14.994260855019096 12.32129707932472-2.6193279772996907 32.92287513613701-6.422717124223709 57.90968891233206-8.798986673355103 48.75426180660725-4.635762423276901 91.58685989677906-1.9037313759326935 127.56222300231457 8.11733677983284 6.752000190317631 1.8806476145982742 10.556068271398544 9.023713879287245 8.292501792311668 15.657579526305199-2.072107046842575 6.075102835893631-8.519265800714493 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.419483676552773-145.1472966000438-5.043801851570606-174.01082441210747 1.0353745892643929-6.346676498651505 1.3361424207687378-12.62817531824112-2.527671866118908-14.279343187808994-8.798986673355103zM578.194043494761 467.3784104064107l-0.006789341568946838-0.02308376133441925c-1.7699813470244408-6.719411350786688 2.4380525574088097-13.548810034990307 9.235541336238382-14.994260855019096 12.32129707932472-2.620006911456585 32.92287513613701-6.422717124223709 57.90968891233206-8.798986673355103 48.75426180660725-4.635762423276901 91.58685989677906-1.9037313759326935 127.56222300231457 8.116657845675945 6.752000190317631 1.8806476145982742 10.556068271398544 9.024392813444138 8.292501792311668 15.658258460462093-2.072107046842575 6.075102835893631-8.519265800714493 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.419483676552773-145.1472966000438-5.043801851570606-174.01082441210747 1.0353745892643929-6.346676498651505 1.3375002890825272-12.62817531824112-2.527671866118908-14.279343187808994-8.798986673355103zM578.194043494761 559.0813680440187l-0.006789341568946838-0.022404827177524567c-1.7699813470244408-6.720090284943581 2.4380525574088097-13.549488969147209 9.235541336238382-14.994260855019096 12.32129707932472-2.6206858456134796 32.92287513613701-6.422717124223709 57.90968891233206-8.798986673355103 48.75426180660725-4.637120291590691 91.58685989677906-1.9037313759326935 127.56222300231457 8.116657845675945 6.752000190317631 1.8806476145982742 10.556068271398544 9.023713879287245 8.292501792311668 15.657579526305199-2.072107046842575 6.075102835893631-8.519265800714493 9.524088352918625-14.70299810171127 7.80570600181818-66.26193691045044-18.418804742395878-145.1472966000438-5.0431229174137115-174.01082441210747 1.0360535234212875-6.346676498651505 1.3361424207687378-12.62817531824112-2.5283508002758026-14.279343187808994-8.800344541668894z" fill="#ffffff" p-id="14196"></path></svg>
            </span>
            <span clasaName='text'>
              今日阅读68分钟
            </span>
          </div>
        </div>
        <Other/>
      </div>
    )
  }
}

export default UserInfo;