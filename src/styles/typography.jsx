import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

// -------------------- SIDEBAR

export const SidebarTemp = styled.h1`
    font-weight: 500;
    font-size: clamp(4rem, 15vw + 2rem, 8rem);
`;

export const SidebarMetric = styled.span`
    color: ${props => props.theme.secondaryText};
    font-size: clamp(1.5rem, 5vw + 1rem, 3rem);
    font-weight: 500;
`;

export const SidebarWeatherDesc = styled.h2`
    color: ${props => props.theme.primaryText};
    font-size: clamp(1.5rem, 5vw + 1rem, 3rem);
    font-weight: 600;
`;

export const SidebarSubtext = styled(SidebarMetric)`
    font-size: clamp(0.75rem, 2vw + 0.75rem, 1.5rem);
`;

// -------------------- MAIN CONTENT

export const TabLink = styled(NavLink)`
    color: ${props => props.theme.secondaryText};
    font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
    font-weight: 500;
    text-decoration: none;

    &:hover {
        transition: all 0.1s;
        border-bottom: 2px solid ${props => props.theme.secondaryText};
    }
`;

export const Title = styled.h2`
    color: ${props => props.theme.secondaryBackground};
    font-size: clamp(1.25rem, 2vw + 0.5rem, 1.5rem);
`;

export const LoadingText = styled(Title)`
    font-weight: 500;
    font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
`;

// -------------------- WEATHER DETAILS

export const CardTitle = styled.span`
    font-weight: 500;
`;

export const WeatherDesc = styled(CardTitle)`
    font-weight: 700;
`;

export const MaxTemp = styled(CardTitle)`
    font-size: 1.25rem;
    font-weight: 600;
`;

export const MaxTempMetric = styled(CardTitle)`
    font-size: 0.875rem;
`;

export const MinTemp = styled(MaxTemp)`
    color: ${props => props.theme.secondaryText};
`;

export const MinTempMetric = styled(MinTemp)`
    font-size: 0.875rem;
    font-weight: 500;
`;

// -------------------- HIGHLIGHTS

export const HighlightsCardInfo = styled.h2`
    color: ${props => props.theme.primaryText};
    font-size: 4rem;
`;

export const HighlightsCardMetric = styled(CardTitle)`
    font-size: 2rem;
`;

export const Percentage = styled(SidebarMetric)`
    font-size: 1rem;
    font-weight: 700;
`;

// -------------------- SEARCH MENU

export const ResultText = styled.span`
    font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
    text-align: start;
    text-transform: capitalize;
    width: 100%;
    padding: 1rem 0.5rem;
    border: 1px solid transparent;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 1px solid ${props => props.theme.borderColor};
    }

    &:hover:after {
        content: ' \\203A';
        color: ${props => props.theme.borderColor};
        position: absolute;
        right: 1rem;
        font-size: clamp(1.5rem, 2vw + 0.5rem, 2rem);
    }
`;

export const BackText = styled.span`
    /* color: ${props => props.theme.borderColor}; */
    /* text-transform: uppercase;
    letter-spacing: 4px; */

    &:before {
        content: ' \\2190';
        padding-right: 6px;
    }
`;
