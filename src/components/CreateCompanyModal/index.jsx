import { useRef, useState } from 'react'
import Button from '../Button'
import { ModalContainer, ModalContent, Title, InnerContainer } from './style'
import InputBox from '../InputBox'
import OptionButton from '../OptionButton'
import Tip from '../Tip'
import ImgAdd from '../ImageAdd'
import AssetBox from '../AssetBox'
import { emptyImg } from '../../assets'
import { useCompanyData } from '../../hooks/useCompanyData'

const CreateCompany = ({ companyData, setCompanyData }) => {
  const {activeCompany, setActiveCompany} = useCompanyData();
  const [modalOpen, setModalOpen] = useState(false) //모달 useState
  const modalBackgorund = useRef()

  //UseState
  const [companyName, setCompanyName] = useState('')
  const [companyInfo, setCompanyInfo] = useState('')
  const [logoImg, setLogoImg] = useState(null)
  const [logoFileName, setLogoFileName] = useState('')
  const [level, setLevel] = useState(null)
  const [period, setPeriod] = useState(null)
  const [invest, setInvest] = useState(null)
  // 버튼이 클릭되었을 때 index값이 같다면 선택해제, 다르다면 index값 초기화
  const levelArr = ['상', '중', '하']
  const levelTip = {
    상: "'상' 난이도는 최소 주 5회 이상 플랜을 세우고 수행해야해요.",
    중: "'중' 난이도는 주 3회 플랜을 수행하는 것을 목표로 해요.",
    하: "'하' 난이도는 주 1~2회 플랜을 수행해도 괜찮아요.",
  }
  const defaultLevelTip = '난이도는 한 주에 계획을 수행할 빈도를 의미해요.'

  const periodArr = ['7일', '14일', '한달(30일)']
  const defaultPeriodTip = '최소 운영 기간이 끝나면 회사를 매각할 수 있어요.'

  const investPrice = ['10%', '25%', '50%']
  const defaultInvestTip = '투자가능 금액의 최대 50%까지 투자할 수 있어요.'
  
  return (
    <div>
      <div>
        <Button onClick={() => setModalOpen(true)}>회사 상장하기</Button>
      </div>

      {/* 모달 창 밖의 부분 클릭 시 닫기 */}
      {modalOpen && (
        <ModalContainer
          ref={modalBackgorund}
          onClick={e => {
            if (e.target === modalBackgorund.current) {
              setModalOpen(false)
              setInvest(null)
              setLevel(null)
              setPeriod(null)
              setCompanyName(null)
              setCompanyInfo(null)
              setLogoImg(null)
              setLogoFileName(null)
            }
          }}
        >
          <ModalContent>
            <div>
              <div style={{ display: 'flex' }}>
                <InnerContainer>
                  <Title>회사명</Title>
                  <InputBox
                    width={470}
                    placeholder={'ex)아침운동'}
                    value={companyName}
                    onChange={e => {
                      setCompanyName(e.target.value)
                    }}
                  />
                  <Title>회사 정보</Title>
                  <InputBox
                    width={470}
                    placeholder={'ex)등교하기 전 간단하게 운동하기'}
                    value={companyInfo}
                    onChange={e => {
                      setCompanyInfo(e.target.value)
                    }}
                  />

                  <Title>로고 이미지 추가</Title>
                  <ImgAdd
                    img={logoImg}
                    setImg={img => {
                      setLogoImg(img)
                    }}
                    fileName={logoFileName}
                    setFileName={fileName => {
                      setLogoFileName(fileName)
                    }}
                  />
                </InnerContainer>
                <InnerContainer>
                  <Title>난이도</Title>
                  <OptionButton
                    OptionList={levelArr}
                    currentState={level}
                    SetState={setLevel}
                  />
                  <Tip
                    ButtonTexts={levelArr}
                    option={level}
                    TipArr={levelTip}
                    defaultTip={defaultLevelTip}
                    changeTip={true}
                  ></Tip>
                  <Title>회사 최소 운영기간</Title>
                  <OptionButton
                    OptionList={periodArr}
                    currentState={period}
                    SetState={setPeriod}
                  />
                  <Tip defaultTip={defaultPeriodTip} />
                  <Title>투자비용</Title>
                  <OptionButton
                    OptionList={investPrice}
                    currentState={invest}
                    SetState={setInvest}
                  />
                  <Tip defaultTip={defaultInvestTip} />
                </InnerContainer>
                <InnerContainer>
                  <AssetBox Text={'투자가능금액'} Asset={parseInt(activeCompany.investmentAmount)} />
                  <AssetBox Text={'투자비용'} Asset={parseInt(activeCompany.investmentAmount)} /> 
                  <AssetBox Text={'상장시 스톡옵션 1주 가격'} Asset={parseInt(activeCompany.currentStockPrice)} />
                  <AssetBox Text={'지급되는 스톡옵션'} Asset={parseInt(activeCompany.initialStockQuantity)} unit="주" />
                  {/* 이 위에 Asset부분에 들어가야할 것들 무조건수정(임시 연결) */}
                </InnerContainer>
              </div>
            </div>
            <Button
              width={'1470'}
              onClick={() => {
                console.log(level)
                const newCompany = {
                  name: companyName,
                  logo: logoImg,
                  buyPrice: 5000,
                  currentPrice: 5000,
                  chartData: [
                    [
                      ['Date', 'Low', 'Open', 'Close', 'High'],
                      ['', 5000, 5000, 5000, 5000],
                    ],
                  ],
                  todo: [],
                }
                setCompanyData(prevCompanyData => [
                  ...prevCompanyData,
                  newCompany,
                ]) // [todo]company 추가 버튼 누르면 백앤드 서버에 전송
                setModalOpen(false)
                setInvest(null)
                setLevel(null)
                setPeriod(null)
                setCompanyName(null)
                setCompanyInfo(null)
                setLogoImg(null)
                setLogoFileName(null)
              }}
            >
              회사 상장하기
            </Button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  )
}

export default CreateCompany
