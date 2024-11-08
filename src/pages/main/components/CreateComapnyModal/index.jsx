import { useRef, useState } from "react";
import { ModalContainer, ModalContent, Title, InnerContainer } from "./style";
import Button from "../../../../components/Button";
import InputBox from "../../../../components/InputBox";
import OptionButton from "../../../../components/OptionButton";
import Tip from "../../../../components/Tip";
import ImgAdd from "../ImgAdd";
import { useUser } from "../../../../hooks/useUser";
import { useCompanyData } from "../../../../hooks/useCompanyData";
import { API } from "../../../../api/axios";

const CreateCompany = () => {
  const { userData } = useUser();
  const { setCompanyList } = useCompanyData();
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  // State 관리
  const [companyName, setCompanyName] = useState('');
  const [companyInfo, setCompanyInfo] = useState('');
  const [logoImg, setLogoImg] = useState(null);
  const [level, setLevel] = useState(null);
  const [period, setPeriod] = useState(null);
  const [invest, setInvest] = useState(null);
  const [logoFileName, setLogoFileName] = useState('');
  const [logoFile, setLogoFile] = useState('');

  // 난이도 및 운영 기간 매핑
  const levelArr = ['상', '중', '하'];
  const levelMap = { 상: 'HIGH', 중: 'MEDIUM', 하: 'LOW' };
  const periodArr = ['7일', '14일', '한달(30일)'];
  const periodMap = {
    '7일': 'ONE_WEEK',
    '14일': 'TWO_WEEK',
    '한달(30일)': 'ONE_MONTH',
  };

  const handleCreateCompany = async () => {
    const token = localStorage.getItem('accessToken');
  
    if (!companyName || !companyInfo || !level || !period) {
      alert('모든 필드를 입력해 주세요.');
      return;
    }
  
    const formData = new FormData();

    const companyData = {
      name: companyName,
      description: companyInfo,
      level: levelMap[level],
      leastOperatePeriod: periodMap[period],
      initialStockPrice: 5000,
      initialStockQuantity: 100,
    };
    formData.append("company", [JSON.stringify(companyData)]);
  
    if (logoFile instanceof File) {
      formData.append("logo", logoFile);
    }

    try {
      const response = await API.post("/company", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Success:", response.data);
  
      setCompanyList((prevCompanyData) => [...prevCompanyData, response.data]);
  
      // 초기화
      setModalOpen(false);
      setInvest(null);
      setLevel(null);
      setPeriod(null);
      setCompanyName('');
      setCompanyInfo('');
      setLogoImg(null);
    } catch (error) {
      console.error("Error sending company data:", error);
    }
  };

    return (
        <div>
            <Button onClick={() => setModalOpen(true)}>회사 상장하기</Button>

      {modalOpen && (
        <ModalContainer
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
              setInvest(null);
              setLevel(null);
              setPeriod(null);
              setCompanyName('');
              setCompanyInfo('');
              setLogoImg(null);
            }
          }}
        >
          <ModalContent>
            <div style={{ display: 'flex' }}>
              <InnerContainer>
                <Title>회사명</Title>
                <InputBox width={470} placeholder={'ex)아침운동'} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                <Title>회사 정보</Title>
                <InputBox
                  width={470}
                  placeholder={'ex)등교하기 전 간단하게 운동하기'}
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                />
                <Title>로고 이미지 추가</Title>
                <ImgAdd
                  img={logoImg}
                  setImg={setLogoImg}
                  fileName={logoFileName}
                  setFileName={setLogoFileName}
                  setLogoFile={setLogoFile}
                />
              </InnerContainer>
              <InnerContainer>
                <Title>난이도</Title>
                <OptionButton OptionList={levelArr} currentState={level} SetState={setLevel} />
                <Tip defaultTip={'난이도는 한 주에 계획을 수행할 빈도를 의미해요.'} />
                <Title>회사 최소 운영기간</Title>
                <OptionButton OptionList={periodArr} currentState={period} SetState={setPeriod} />
                <Tip defaultTip={'최소 운영 기간이 끝나면 회사를 매각할 수 있어요.'} />
                <Title>투자비용</Title>
                <OptionButton OptionList={['10%', '25%', '50%']} currentState={invest} SetState={setInvest} />
                <Tip defaultTip={'투자가능 금액의 최대 50%까지 투자할 수 있어요.'} />
              </InnerContainer>
            </div>
            <Button width={'470'} onClick={handleCreateCompany}>
              회사 상장하기
            </Button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
};

export default CreateCompany;